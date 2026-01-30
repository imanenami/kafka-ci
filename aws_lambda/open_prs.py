"""AWS Lambda for retrieving open PRs."""

import json
import logging
import os
from concurrent.futures import ThreadPoolExecutor
from functools import partial
from typing import Literal

import urllib3

logger = logging.getLogger()
log_level = os.environ.get("LAMBDA_LOG_LEVEL", "INFO")
logger.setLevel(logging.getLevelName(log_level))


# Lambda environment variables
AWS_SESSION_TOKEN = os.environ["AWS_SESSION_TOKEN"]
EXT_PORT = 2773
SECRET_ID = "github/bot-token"

# App config
BASE_URI = "https://api.github.com/repos/canonical"
GH_API_VERSION = "2022-11-28"
HEADERS = {
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": GH_API_VERSION,
}
REPOS = [
    "charmed-kafka-snap",
    "charmed-kafka-rock",
    "kafka-bundle",
    "kafka-k8s-bundle",
    "kafka-rock",
    "charmed-karapace-snap",
    "charmed-karapace-rock",
    "charmed-kafka-ui-snap",
    "charmed-kafka-ui-rock",
    "kafka-operator",
    "kafka-k8s-operator",
    "karapace-operator",
    "karapace-k8s-operator",
    "kafka-connect-operator",
    "kafka-connect-k8s-operator",
    "kafka-ui-operator",
    "kafka-ui-k8s-operator",
    "zookeeper-operator",
    "zookeeper-k8s-operator",
]


def _retrieve_extension_value(url):
    """Retrieve the secret value using AWS Parameter and Secrets Lambda extension."""
    http = urllib3.PoolManager()
    url = f"http://localhost:{EXT_PORT}{url}"
    headers = {"X-Aws-Parameters-Secrets-Token": AWS_SESSION_TOKEN}
    response = http.request("GET", url, headers=headers)
    return json.loads(response.data)


def _req(method: Literal["POST", "GET"], repo: str, api: str, **kwargs):
    """Make a request to GH API."""
    http = urllib3.PoolManager()
    headers = HEADERS | kwargs.get("headers", {})
    match method:
        case "GET":
            raw = http.request("GET", f"{BASE_URI}/{repo}/{api}", headers=headers)
            resp = json.loads(raw.data)

    return resp


_get = partial(_req, "GET")


def get_open_prs(results: dict[str, list], repo: str, headers: dict = {}):
    """Get open PRs for a give repo."""
    res = _get(repo, "pulls?state=open", headers=headers)
    data = [
        {
            "repo": repo.replace("-operator", ""),
            "title": i["title"] + "@@@" + i["html_url"],
            "created": i["created_at"].replace("T", " ").replace("Z", " "),
            "user": i["user"]["login"],
        }
        for i in res
    ]
    results.update({repo: data})


def lambda_handler(event, context):
    """Main lambda handler."""
    # Load GH token secret
    logger.info("Retrieving GH token from SSM")
    secrets_url = "/secretsmanager/get?secretId=" + SECRET_ID
    # ['ARN', 'CreatedDate', 'Name', 'SecretBinary',
    #  'SecretString', 'VersionId', 'VersionStages', 'ResultMetadata']
    secret_str = _retrieve_extension_value(secrets_url)["SecretString"]

    secret_val = json.loads(secret_str)
    token = secret_val.get("token", "")
    headers = {"Authorization": f"Bearer {token}"}

    results = {}
    rbound_get_open_prs = partial(get_open_prs, results, headers=headers)
    with ThreadPoolExecutor(max_workers=4) as tpe:
        _ = tpe.map(rbound_get_open_prs, REPOS)
        tpe.shutdown(wait=True)

    data = [pr for v in results.values() for pr in v]

    return {
        "statusCode": 200,
        "body": {"data": data},
        "headers": {
            "Content-Type": "text/json",
            "Access-Control-Allow-Origin": "*",
        },
    }
