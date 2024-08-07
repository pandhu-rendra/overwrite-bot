module.exports = {
    name: "useravatar",
    aliases: ["avatar"],
    category: "fun",
    executeAt: "both",
    code: `
    $author[$userTag[$mentioned[1]];$userAvatar[$mentioned[1]] ]
    $description[<@$mentioned[1]>'s Avatar]
    $image[$userAvatar[$mentioned[1]]]
    $footer[Requested by $userTag[$authorID]]
    $addTimestamp
    $reply[$messageID;true]
    $clientTyping
    $color[#00FFFF]`
}