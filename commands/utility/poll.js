module.exports = {
    name: "poll",
    aliases: ["vote"],
    category: "utility",
    code: `
    $author[Made by $userTag[$authorID];$userAvatar[$authorID]]
    $addField[__Options__;<:ovyes:1252093451848384662> - Yes | <:ovno:1252093449243725855> - No]
    $addField[__Question__;$message]
    $addClientReactions[<:ovyes:1252093451848384662>;<:ovno:1252093449243725855>]
    $footer[Created by $userTag[$authorID];$userAvatar[$authorID]]
    $addTimestamp
    $reply[$messageID;true]
    $clientTyping
    $color[#00FFFF]`
}