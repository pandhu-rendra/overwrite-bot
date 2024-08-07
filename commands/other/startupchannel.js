module.exports = {
    name: "Startup Message (Channel)",
    aliases: ["startup"],
    type: "ready",
    channel: "1239568315446460516",
    code: `$title[Ready!]
    $description[$username[$clientID] is now running!]
    $color[DarkGreen]
    $useChannel[$getVar[startupchannel]]
    
    $onlyIf[$hasPermsInChannel[$getVar[startupchannel];$clientID;sendmessages;viewchannel]==true;]
    $onlyIf[$channelExists[$getVar[startupchannel]]==true;]
    $onlyIf[$getVar[startupchannel]!=none;]
    $onlyIf[$getVar[startupchannelsystem]==on;]
    `
}