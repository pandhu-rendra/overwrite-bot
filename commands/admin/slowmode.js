module.exports = {
    name: "slowmode",
    category: "admin",
    code: `
    $description[<:ovslowmode:1252094963273957481> <@$authorID>, Slowmode has been set to : **$noMentionMessage**]
    $reply[$messageID;true]
    $clientTyping
    $slowmode[$message;$channelID]
    $color[#00FFFF]
    $onlyPerms[managechannels;🛑 You don't have **Manage Channels** permissions!]`
}