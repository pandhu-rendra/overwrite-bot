module.exports = {
    name: "jseval",
    aliases: "jse",
    category: "dev",
    executeAt: "both",
    code: `
    $djsEval[$message]
    $onlyIf[$message!=;You need to evaluate something.]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]`
}