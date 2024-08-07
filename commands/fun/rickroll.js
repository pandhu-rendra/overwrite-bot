module.exports = {
    name: "rickroll",
    category: "fun",
    code: `
    $description[**Successfully send Rickroll DM to <@$mentioned[1]>**]
    $sendDm[https://cdn.discordapp.com/attachments/1241781430577795212/1254005049718341683/lol.mp4?ex=6677eab6&is=66769936&hm=075409645e467b91ec8978206713406698db0645b3024d3fed7725aef425efc5&;$mentioned[1];false]
    $image[https://media.discordapp.net/attachments/1239568210823610408/1253905661620916314/successfully_banner.png?ex=66778e26&is=66763ca6&hm=750ce949a6df83246bb95b17b298b14dda6ac81c2b1a92ceee3431628516d46c&=&format=webp&quality=lossless&width=1025&height=135]
    $footer[Requested by $userTag[$authorID];$userAvatar[$authorID]]
    $addTimestamp
    $reply[$messageID;true]
    $clientTyping
    $color[#00FFFF]`
}