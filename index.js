require('dotenv').config();
const { AoiClient, LoadCommands, Util } = require("aoi.js");
const database = require("./src/database.js");
const express = require("express");
const bodyParser = require('body-parser');
const { parse, createAst } = require('@akarui/aoi.parser');
const { parseExtraOptions } = require('@akarui/aoi.parser/components');

Util.parsers.ErrorHandler = parse;

Util.ErrorHandler = (err, message) => {
    console.error(err);
    message.channel.send(`An error occurred: ${err.message}`);
}

Util.parsers.OptionsParser = (data) => {
    return createAst(data).children.map(parseExtraOptions);
}

const client = new AoiClient({
    token: process.env.TOKEN,
	prefix: ["ov!", "<@$clientID>", "<@!$clientID>", "$getGuildVar[prefix]"],
	autoUpdate: "true",
	intents: ["MessageContent", "Guilds", "GuildMessages", "DirectMessages", "GuildMembers"],
	events: ["onMessage", "onInteractionCreate", "onJoin", "onLeave"],
	disableFunctions: ["$clientToken", "$setClientAvatar"],
    mobilePlatform: true,
    aoiAutoUpdate: true,
    aoiWarning: true,
    aoiLogs: true,
    debug: false,
    suppressAllErrors: false, /**Use this if you don't want get error messages on your discord bot ( Default : false - you can set to true to enable this features) */
    // database: {
	// 	type: "aoi.db",
	// 	db: require("@aoijs/aoi.db"),
	// 	dbType: "KeyValue",
	// 	tables: ["main"],
	// 	path: "./database/",
	// 	securityKey: process.env.DBsecurityKey,
	// }
});

// Handler
const loader = new LoadCommands(client);
loader.load(client.cmd, "./commands/")
require('./handler/variables.js')(client)
require('./handler/status.js')(client)
require('./handler/antiCrash.js')(client)

// Ready event
client.readyCommand({
    channel: '1239568315446460516',
    code: `
    $channelSendMessage[1239568315446460516;
    {newEmbed:{title:Ready Command Code}
    {description:\`\`\`js
Client:     $userTag[$clientID]
Ping:   $ping ms
Bot Creator:    $username[$clientOwnerIds]$discriminator[$clientOwnerIds]
Command loaded:     $commandsCount\`\`\`}
    {color:#00FFFF}};false]`
})

client.readyCommand({
	channel: '1239568315446460516',
	code: `$log[
╭──────────────────────────╮
     Ready Command Code
 Client: $userTag[$clientID]
 Ping: $ping ms
 Bot Creator: $username[$clientOwnerIds]#$discriminator[$clientOwnerIds]
 Commands loaded: $commandsCount
╰──────────────────────────╯]`
})

// Server.js
const server = express();
const port = 433;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static("public"));
server.get('./src/cloud.html', (req, res) => {
    res.sendFile(__dirname + './src/cloud.html');
});

server.listen(port, () => {
    console.log(`╭─────────────────────────────────────────────╮`);
    console.log(`  🔗 Bot running at http://localhost:${port}`,``);
    console.log(`  🔗 Coded by Rendra.exe`,`                    `);
    console.log(`  🔗 Bot is running`,`                         `);
    console.log(`╰─────────────────────────────────────────────╯`);
});

// Welcome & Leave
client.joinCommand({
    channel: "$getGuildVar[welcome_ch]",
    code: `
    $author[$username[$authorID];$userAvatar[$authorID]]
    $title[<:ov1:1271069769784754176><:ov2:1271069771990831135><:ov3:1271069758443360307><:ov4:1271069760754552865><:ov5:1271069763098902641><:ov6:1271069765091328050><:ov7:1271069767545131079>]
    $description[
Selamat datang <@$authorID> di **$guildName[$guildID]**

> **Jangan lupa membaca rules dan terms of service - tos**
> <#1238926804216188989>
> <#1264193302257864747>

> **User IDs**
> <@$authorID> ($authorID)
> **#BE A SMART BUYER**]
    $image[https://media.discordapp.net/attachments/1270719761805742100/1271068338495164507/overwrite_banner.png?ex=66b5fe23&is=66b4aca3&hm=dd7c42c40499546d2f584f7d80261b73b60bc8e3ea92966be803141d5c15dc30&=&format=webp&quality=lossless&width=1025&height=135]
    $footer[$guildName[$guildID];$guildIcon[$guildID]]
    $addTimestamp
    $color[#00FFFF]
    $onlyIf[$channelId==$getGuildVar[welcome_ch]]`
})

client.leaveCommand({
    channel: "$getGuildVar[goodbye_ch]",
    code: `
    $author[$username[$authorID];$userAvatar[$authorID]]
    $title[<:ov1:1271069769784754176><:ov2:1271069771990831135><:ov3:1271069758443360307><:ov4:1271069760754552865><:ov5:1271069763098902641><:ov6:1271069765091328050><:ov7:1271069767545131079>]
    $description[
Selamat tinggal <@$authorID>, ku kira hubungan mu dengan **$guildName[$guildID]** spesial]
    $image[https://media.discordapp.net/attachments/1270719761805742100/1271068338495164507/overwrite_banner.png?ex=66b5fe23&is=66b4aca3&hm=dd7c42c40499546d2f584f7d80261b73b60bc8e3ea92966be803141d5c15dc30&=&format=webp&quality=lossless&width=1025&height=135]
    $footer[$guildName[$guildID];$guildIcon[$guildID]]
    $addTimestamp
    $color[#00FFFF]
    $onlyIf[$channelId==$getGuildVar[goodbye_ch]]`
})

/**
╔═╗╦  ╦╔═╗╦═╗╦ ╦╦═╗╦╔╦╗╔═╗  ╔═╗╔╦╗╔═╗╦═╗╔═╗
║ ║╚╗╔╝║╣ ╠╦╝║║║╠╦╝║ ║ ║╣   ╚═╗ ║ ║ ║╠╦╝║╣ 
╚═╝ ╚╝ ╚═╝╩╚═╚╩╝╩╚═╩ ╩ ╚═╝  ╚═╝ ╩ ╚═╝╩╚═╚═╝
 * @info
 *  Source code by | Overwrite store
 * @info
 *  Source code id | OVERWRITE BOT
 * @info
 *  Perhatian      | Credit & Watermark jangan diremove | hilangkan!
 * @info
*/