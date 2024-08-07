module.exports = {
    name: "botinfo",
    category: "information",
    code: `
    $title[Botinfo ($username[$clientID])]
    $color[#00FFFF]
    $thumbnail[$userAvatar[$clientID]]
    $addField[RAM;$ramMB / $maxRamMB] $addField[CPU Usage;$cpu[os]/100%;true]
    $addField[Ping;$pingms;true]$addField[Uptime;$uptime[humanize];true]
    $addField[Commands;$commandsCount;true]$addField[Users;$allMembersCount;true]
    $addField[Channels;$allChannelsCount;true]$addField[Server;$guildCount;true]
    $addField[Beta Version;1.0.1;true]$addField[Version;1.0.0;true]
    $addField[Created;$creationDate[$clientID;date];true]$addField[Bot Name;<@$clientID>;true]$addField[Developer;<@$clientOwnerIDs>;true]
    $addButton[1;Invite me;link;https://discord.com/oauth2/authorize?client_id=1241761887373230170;false;🔗]
    $reply[$messageID;true]
    $clientTyping
    $addTimestamp
    $footer[Requested by $userTag[$authorID];$userAvatar[$authorID]`
}