module.exports = {
    name: "giverole",
    aliases: ["addrole", "role"],
    category: "admin",
    code: `
    $giveRole[$guildID;$mentioned[1];$findRole[$mentionedRoles[1]]]
    $sendMessage[Added **<@&$mentionedRoles[1]>** to **<@$mentioned[1]>**]
    $onlyPerms[moderatemembers;🛑 You don't have **Manage Members** permissions!]
    $reply[$messageID;true]
    $clientTyping`
}