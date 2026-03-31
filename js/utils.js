titleReplacements = [
    ["sql", "SQL"],
    ["ui", "UI"],
]

function toTitleCase(str) {
  if ((str === null) || (str === ''))
    return false;
  else
    str = str.toString();

  return str.split(' ')
    .map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

function betterTitle(str) {
    isApache = (
        str.includes("kafka") || str.includes("zookeeper")
    ) && (
        !str.includes("kafka-ui")
    );
    str = str.replaceAll("-", " ");
    for (i=0; i<titleReplacements.length; i++) 
        str = str.replace(titleReplacements[i][0], titleReplacements[i][1]);
    console.log(str);
    return `${isApache ? "Apache " : ""}${toTitleCase(str)}`;
}