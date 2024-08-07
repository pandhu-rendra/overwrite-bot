module.exports = {
    name: "removemembership",
    aliases: ["delmembership"],
    category: "membership",
    code: `
    $author[$userTag[$mentioned[$message]];$userAvatar[$mentioned[$message]]]
    $description[
    **Successfully removed __Membership__ for <@$mentioned[1]>,** Thank you for joining our __membership__, don't forget to join again :)]
    $image[https://media.discordapp.net/attachments/1239568210823610408/1253905661620916314/successfully_banner.png?ex=66778e26&is=66763ca6&hm=750ce949a6df83246bb95b17b298b14dda6ac81c2b1a92ceee3431628516d46c&=&format=webp&quality=lossless&width=550&height=73]
    $removeRole[$guildID;$mentioned[1];$findRole[<@&1253911926304411689>]]
    $onlyPerms[moderatemembers;🛑 You don't have **Manage Members** permissions!]
    $reply[$messageID;true]
    $clientTyping
    $color[#00FFFF]
    $addTimestamp
    $footer[$guildName[$guildID];$guildIcon[$guildID]]`
}