module.exports = {
    name: "ship",
    aliases: ["shiping"],
    category: "fun",
    code: `
    $description[
    <@$mentioned[1;false]> ---- $random[1;100]% ---- <@$mentioned[2;false]>]
    $footer[Requested by $userTag[$authorID];$userAvatar[$authorID]]
    $addTimestamp
    $reply[$messageID;true]
    $clientTyping
    $color[#00FFFF]`
}