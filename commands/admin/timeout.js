module.exports = {
    name: "timeout",
    category: "admin",
    code: `
    $timeoutMember[$guildID;$findUser[$mentioned[1;false];false];$noMentionMessage;false]
    $description[⏳ <@$findUser[$mentioned[1;false];false]> Has been timeout for : **$noMentionMessage**]
    $reply[$messageID;true]
    $clientTyping
    $color[#00FFFF]
    $onlyPerms[moderatemembers;🛑 You don't have **Moderate Members** permissions!]`
}