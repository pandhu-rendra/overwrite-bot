module.exports = {
    name: "shutdown",
    aliases: ["off","stop"],
    category: "dev",
    executeAt: "both",
    code: `
    $shutdown
    $sendMessage[**<a:ovdown:1251530379580670093> Bot stopped!**]
    $onlyForIDs[$clientOwnerIds;You don't have permission to use this commands!]
    $reply[$messageID;true]
    $clientTyping`
}