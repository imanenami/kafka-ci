charms = [
    {
        "name": "kafka",
        "group": "kafka",
        "repo": "https://github.com/canonical/kafka-operator",
        "substrate": "machine",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "ci.yaml",
            "release_workflow": "release.yaml"
        }
    },
    {
        "name": "kafka-connect",
        "group": "kafka",
        "repo": "https://github.com/canonical/kafka-connect-operator",
        "substrate": "machine",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "ci.yaml",
            "release_workflow": "release.yaml"
        }
    },
    {
        "name": "karapace",
        "group": "kafka",
        "repo": "https://github.com/canonical/karapace-operator",
        "substrate": "machine",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "ci.yaml",
            "release_workflow": "release.yaml"
        }
    },
    {
        "name": "zookeeper",
        "group": "kafka",
        "repo": "https://github.com/canonical/zookeeper-operator",
        "substrate": "machine",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "ci.yaml",
            "release_workflow": "release.yaml"
        }
    },
    {
        "name": "kafka-ui",
        "group": "kafka",
        "repo": "https://github.com/canonical/kafka-ui-operator",
        "substrate": "machine",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "ci.yaml",
            "release_workflow": "release.yaml"
        }
    },
    {
        "name": "cassandra",
        "group": "kafka",
        "repo": "https://github.com/canonical/cassandra-operator",
        "substrate": "machine",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "ci.yaml",
            "release_workflow": "release.yaml"
        }
    },
    {
        "name": "kafka-k8s",
        "group": "kafka",
        "repo": "https://github.com/canonical/kafka-k8s-operator",
        "substrate": "k8s",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "ci.yaml",
            "release_workflow": "release.yaml"
        }
    },
    {
        "name": "kafka-connect-k8s",
        "group": "kafka",
        "repo": "https://github.com/canonical/kafka-connect-k8s-operator",
        "substrate": "k8s",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "ci.yaml",
            "release_workflow": "release.yaml"
        }
    },
    {
        "name": "kafka-ui-k8s",
        "group": "kafka",
        "repo": "https://github.com/canonical/kafka-ui-k8s-operator",
        "substrate": "k8s",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "ci.yaml",
            "release_workflow": "release.yaml"
        }
    },
    {
        "name": "karapace-k8s",
        "group": "kafka",
        "repo": "https://github.com/canonical/karapace-k8s-operator",
        "substrate": "k8s",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "ci.yaml",
            "release_workflow": "release.yaml"
        }
    },
    {
        "name": "zookeeper-k8s",
        "group": "kafka",
        "repo": "https://github.com/canonical/zookeeper-k8s-operator",
        "substrate": "k8s",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "ci.yaml",
            "release_workflow": "release.yaml"
        }
    },
    {
        "name": "postgresql",
        "group": "postgresql",
        "repo": "https://github.com/canonical/postgresql-operator",
        "substrate": "machine",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "ci.yaml",
            "release_workflow": "release.yaml"
        }
    },
    {
        "name": "pgbouncer",
        "group": "postgresql",
        "repo": "https://github.com/canonical/pgbouncer-operator",
        "substrate": "machine",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "ci.yaml",
            "release_workflow": "release.yaml"
        }
    },
    {
        "name": "postgresql-k8s",
        "group": "postgresql",
        "repo": "https://github.com/canonical/postgresql-k8s-operator",
        "substrate": "k8s",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "ci.yaml",
            "release_workflow": "release.yaml"
        }
    },
    {
        "name": "pgbouncer-k8s",
        "group": "postgresql",
        "repo": "https://github.com/canonical/pgbouncer-k8s-operator",
        "substrate": "k8s",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "ci.yaml",
            "release_workflow": "release.yaml"
        }
    },
    {
        "name": "airflow-coordinator-k8s",
        "group": "airflow",
        "repo": "https://github.com/canonical/airflow-coordinator-k8s-operator/",
        "substrate": "k8s",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "tests.yaml",
            "release_workflow": "publish.yaml"
        }
    },
    {
        "name": "airflow-api-server-k8s",
        "group": "airflow",
        "repo": "https://github.com/canonical/airflow-core-operators/",
        "substrate": "k8s",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "tests.yaml",
            "release_workflow": "publish.yaml"
        }
    },
    {
        "name": "airflow-dag-processor-k8s",
        "group": "airflow",
        "repo": "https://github.com/canonical/airflow-core-operators/",
        "substrate": "k8s",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "tests.yaml",
            "release_workflow": "publish.yaml"
        }
    },
    {
        "name": "airflow-scheduler-k8s",
        "group": "airflow",
        "repo": "https://github.com/canonical/airflow-core-operators/",
        "substrate": "k8s",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "tests.yaml",
            "release_workflow": "publish.yaml"
        }
    },
    {
        "name": "airflow-triggerer-k8s",
        "group": "airflow",
        "repo": "https://github.com/canonical/airflow-core-operators/",
        "substrate": "k8s",
        "defaults": {
            "rock_pack": "rockcraft pack",
            "ci_workflow": "tests.yaml",
            "release_workflow": "publish.yaml"
        }
    }
];