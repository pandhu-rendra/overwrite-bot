module.exports = {
    name: "setprefix",
    aliases: ["prefix"],
    category: "admin",
    code: `
    $setGuildVar[prefix;$message]
    $title[Set-Prefix]
    $description[Prefix set to \`\`$message\`\`]
    $onlyPerms[managechannels;🛑 You don't have **Manage Channels** permissions!]
    $color[#00FFFF]`
}