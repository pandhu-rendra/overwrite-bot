module.exports = {
    name: "reboot",
    aliases: ["restart"],
    category: "dev",
    executeAt: "both",
    code: `
    $reboot
    $sendMessage[**<a:ovrestart:1252101055085412423> Bot restarted!**]
    $onlyForIDs[$clientOwnerIds;You don't have permission to use this commands!]
    $reply[$messageID;true]
    $clientTyping`
}