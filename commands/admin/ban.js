module.exports = {
    name: "ban",
    category: "admin",
    code: `
    $ban[$guildID;$findUser[$mentioned[1;false];false];7d;$noMentionMessage]
    $description[Banned <@$findUser[$mentioned[1;false];false]> With reason : $noMentionMessage]
    $reply[$messageID;true]
    $clientTyping
    $color[#00FFFF]
    $onlyPerms[banmembers;🛑 You don't have **Ban Members** permissions!]`
}