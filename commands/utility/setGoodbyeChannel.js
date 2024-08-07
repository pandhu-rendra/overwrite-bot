module.exports = {
    name: "goodbye-set",
    aliases: ["gs"],
    code: `
    $setGuildVar[goodbye_ch;$findChannel[$message]]
    $title[Goodbye Channel Set]
    $description[Goodbye Channel Seted to <#$findChannel[$message]>]
    $onlyPerms[managechannels;🛑 You don't have **Manage Channels** permissions!]
    $color[#00FFFF]`
}