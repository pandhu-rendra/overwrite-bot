module.exports = {
    name: "serverinfo",
    aliases: ["guildinfo"],
    category: "information",
    code: `
    $author[$guildName[$guildID];$guildIcon[$guildID]]
    $thumbnail[$guildIcon[$guildID]]
    $addField[Created;\`\`$creationDate[$guildID;date]\`\`]
    $addField[Channels;$channelCount[$guildID;all];true]$addField[Roles;$roleCount[$guildID;true];true]
    $addField[Server Boost Status;$guildBoostCount[$guildID] Boost (\`\`Level $guildBoostLevel[$guildID]\`\`) ]
    $addField[Members Count;$allMembersCount]
    $addField[ID;$guildID;true]$addField[Server Owner;<@$guildOwnerID[$guildID]>(\`\`$userTag[$guildOwnerID[$guildID]]\`\`);true]
    $addButton[1;Emoji List;primary;emojiList;false;<:ov_wolf_notes:1252520575595708490>]
    $reply[$messageID;true]
    $clientTyping
    $color[#00FFFF]
    $addTimestamp
    $footer[Requested by $userTag[$authorID];$userAvatar[$authorID]`
}