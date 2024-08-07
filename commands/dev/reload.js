module.exports = {
    name: "reload",
    aliases: ["update"],
    category: "dev",
    executeAt: "both",
    code: `
    $author[Commands has been reloaded!;$userAvatar[$clientID]]
    $addField[Commands;
    **Prefix:**  $commandsCount
    **Awaited:** $commandsCount[awaited]
    **Interactions:** $get[interactions]
    **Slash:** $commandsCount[slash]
    ]
    $addButton[1;Total: $get[total];2;deadcustomid;true]
    $let[total;$sum[$commandsCount;$commandsCount[awaited];$commandsCount[button];$commandsCount[selectMenu];$commandsCount[modal];$commandsCount[slash]]]
    $let[interactions;$sum[$commandsCount[button];$commandsCount[selectMenu];$commandsCount[modal]]]
    $color[#00FFFF]
    $updateCommands
    $cooldown[5s;Slow down! Don't spam the command!
    Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;update;$authorID];$dateStamp];1000]]:R>]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
    $reply[$messageID;true]
    $clientTyping`
}