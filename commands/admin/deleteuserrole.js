module.exports = {
    name: "delurole",
    aliases: ["delrole", "removeuserrole", "delusrole"],
    category: "admin",
    code: `
    $removeRole[$guildID;$mentioned[1];$roleId[$mentionedRoles[1]]]
    $sendMessage[Removed **<@&$mentionedRoles[1]>** from **<@$mentioned[1]>**]
    $onlyPerms[moderatemembers;🛑 You don't have **Manage Members** permissions!]
    $reply[$messageID;true]
    $clientTyping`
}