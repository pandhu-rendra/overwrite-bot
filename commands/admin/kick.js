module.exports = {
    name: "kick",
    category: "admin",
    code: `
    $kick[$guildID;$findUser[$mentioned[1;false];false];$noMentionMessage]
    $description[<@$findUser[$mentioned[1;false];false]> Has been kicked with reason : $noMentionMessage]
    $reply[$messageID;true]
    $clientTyping
    $color[#00FFFF]
    $onlyPerms[kickmembers;🛑 You don't have **Kick Members** permissions!]`
}