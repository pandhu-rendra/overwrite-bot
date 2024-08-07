module.exports = {
    name: "userinfo",
    aliases: ["whois"],
    category: "information",
    code: `
    $author[$userTag[$mentioned[$message]];$userAvatar[$mentioned[$message]]]
    $thumbnail[$userAvatar[$mentioned[$message]]]
    $description[<@$mentioned[$message]>]
    $addField[Roles ($userRolesCount[$mentioned[$message];$guildID]);$userRoles[$mentioned[$message];$guildID;mention;,]]
    $addField[Server Boosting;$isBoosting[$mentioned[$message];$guildID]]
    $addField[Join Date;\`\`$parseDate[$memberJoinDate[$mentioned[$message]];$guildID]\`\`]
    $addField[Created Date;\`\`$creationDate[$mentioned[$message];date]\`\`]
    $addField[ID;$mentioned[$message]]
    $reply[$messageID;true]
    $clientTyping
    $color[#00FFFF]
    $addTimestamp
    $footer[Requested by $userTag[$mentioned[$message]];$userAvatar[$mentioned[$message]]]`
}