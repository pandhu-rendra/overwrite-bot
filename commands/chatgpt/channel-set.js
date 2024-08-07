module.exports = {
    name: "channel-set",
    aliases: ["cs"],
    code: `
    $setGuildVar[channel;$findChannel[$message]]
    $title[channel-set]
    $description[Chatbot Channel Seted to <#$findChannel[$message]>]
    $onlyPerms[managechannels;🛑 You don't have **Manage Channels** permissions!]
    $color[#00FFFF]`
}