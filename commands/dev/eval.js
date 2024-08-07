module.exports = {
    name: "eval",
    aliases: ["ev"],
    category: "dev",
    executeAt: "both",
    code: `
    $eval[$message]
    $onlyIf[$checkContains[$message;clientToken]==false;]
    $onlyForIDs[$clientOwnerIds;You don't have permission to use this commands!]`
}