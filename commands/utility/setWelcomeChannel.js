module.exports = {
    name: "welcome-set",
    aliases: ["ws"],
    code: `
    $setGuildVar[welcome_ch;$findChannel[$message]]
    $title[Welcome Channel Set]
    $description[Welcome Channel Seted to <#$findChannel[$message]>]
    $onlyPerms[managechannels;🛑 You don't have **Manage Channels** permissions!]
    $color[#00FFFF]`
}