module.exports = [{
    name: "workinghour",
    category: "working hour",
    code:`
    $author[WORKING HOUR;$userAvatar[$clientID]]
    $title[OVERWRITE STORE - WORKING HOUR]
    $description[
\`\`\`js
CHOOSE OPEN OR CLOSE IN THE DROPDOWN MENU BELOW TO SEND OPEN OR CLOSE MESSAGE\`\`\`]
    $thumbnail[$guildIcon[$guildID]]
    $image[https://media.discordapp.net/attachments/1239568210823610408/1267422830916534323/working-hour.gif?ex=66a8bafe&is=66a7697e&hm=6c62b97c0eaae742bfb8fe00e45057062a041a7c5f3fe9458987d6341b911c09&=&width=853&height=480]
    $footer[© OVERWRITE STORE - WORKING HOUR]
    $addTimestamp
    $addSelectMenu[1;string;open;Select an option;1;1;false;OPEN:STORE OPEN:openID:false:ovopen:;CLOSE:STORE CLOSE:closeID:false:ovclose:]
    $color[#00FFFF]
    $clientTyping
    $reply[$messageID;true]
    $onlyPerms[administrator;🛑 You don't have **Administrator** permissions! {delete:15s}]`
},
{
    name: "open",
    type: "interaction",
    prototype: "selectMenu",
    code: `
    $interactionReply[
    {newEmbed:{author:WORKING HOUR:$userAvatar[$clientID]}
    {title:OVERWRITE STORE - WORKING HOUR}
    {description:
> OPEN <#1239027765249048627> TO ORDER
> PLEASE CHECK <#1264193302257864747> 
> BEFORE BUYING
> NO RUSH ORDER!}
    {thumbnail:$guildIcon[$guildID]}
    {image:https://media.discordapp.net/attachments/1239568210823610408/1267422830916534323/working-hour.gif?ex=66a963be&is=66a8123e&hm=2ca8a7d5bd845a1d985e7e994e78050b18fc0b9908e1109ab075d844675eb925&=&width=550&height=309}
    {footer:© OVERWRITE STORE - WORKING HOUR}
    {color:00FFFF}};everyone;false;false]
    $onlyIf[$interactionData[values[0]]==openID;]
    $onlyPerms[administrator;🛑 You don't have **Administrator** permissions! {delete:15s}]`
},
{
    name: "open", // dont change this to close, if you change to close the select menu will not can used
    type: "interaction",
    prototype: "selectMenu",
    code: `
    $interactionReply[
    {newEmbed:{author:WORKING HOUR:$userAvatar[$clientID]}
    {title:OVERWRITE STORE - WORKING HOUR}
    {description:
> STORE CLOSE, TERIMAKASIH TELAH ORDER
> DIHARI INI
> ORDERAN BARU AKAN DIPROSES ESOK HARI}
    {thumbnail:$guildIcon[$guildID]}
    {image:https://media.discordapp.net/attachments/1239568210823610408/1267422830916534323/working-hour.gif?ex=66a963be&is=66a8123e&hm=2ca8a7d5bd845a1d985e7e994e78050b18fc0b9908e1109ab075d844675eb925&=&width=550&height=309}
    {footer:© OVERWRITE STORE - WORKING HOUR}
    {color:00FFFF}};everyone;false;false]
    $onlyIf[$interactionData[values[0]]==closeID;]
    $onlyPerms[administrator;🛑 You don't have **Administrator** permissions! {delete:15s}]`
}]