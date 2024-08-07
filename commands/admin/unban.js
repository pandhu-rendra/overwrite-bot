module.exports = {
    name: "unban",
    category: "admin",
    code: `
    $unban[$guildID;$findUser[$mentioned[1;false];false];$noMentionMessage]
    $description[Unbanned <@$findUser[$mentioned[1;false];false]> With Reason : $noMentionMessage]
    $reply[$messageID;true]
    $clientTyping
    $color[#00FFFF]
    $onlyPerms[banmembers;🛑 You don't have **Ban Members** permissions!]`
}