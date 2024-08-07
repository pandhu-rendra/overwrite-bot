module.exports = {
    name: "help",
    aliases: ["commandhelp", "helpcommand", "bothelp"],
    category: "information",
    executeAt: "both",
    code: `
    $title[HELP] 
    $description[
    \`\`\`js
= Command List =
    
[Use ov!help, to see available commands]
    
== Moderation ==
ov!ban        :: Bans a member from the server
ov!kick       :: Kicks a member from the server
ov!unban      :: Unbans a member from the server
ov!giverole   :: Adds a role to the specified member
ov!delrole    :: Remove a role from the specified member
ov!timeout    :: Timeout a member for the specified duration
ov!slowmode   :: Set the slowmode of a channel
ov!prefix     :: Set custom prefix for your server
ov!nuke       :: Deletes the channel and clones it so pings are removed

== ChatGPT ==
ov!channel-set:: Set a specific channel to use chat-gpt
ov!chat-bot   :: You cannot use this command because this comand is $alwaysExecute, and then will automaticly execute when you send a message on specific channel

== Fun ==
ov!avatar     :: Display the avatar of the provided user
ov!gay        :: Send random percentage to find out how gay are you
ov!khodam     :: Provides information about khodams, supernatural beings believed in various traditions
ov!rickroll   :: Send a rickroll video to mentioned user
ov!ship       :: Calculate love percentage between two users

== Games ==
ov!2048       :: Play 2048 and get your high score
ov!snake      :: Play a snake game like playing snake game in nokia phone

== Giveaway ==
ov!gend       :: End current giveaway //still on development
ov!giveaway   :: Create giveaway to make happy member //still on development
ov!greroll    :: Reroll giveaway winner //still on development

== Information ==
ov!botinfo    :: Send information about the bot itself
ov!serverinfo :: Send information about your server
ov!userinfo   :: Send information about a member
ov!uptime     :: Send information how long bot online
ov!ping       :: Shows the latency of the bot
ov!help       :: Send the available commands

== Nsfw (Only NSFW Channel) ==
ov!4k         :: Send you random 4k resolution nsfw picture / video
ov!anal       :: Send you a random anal picture / video
ov!ass        :: Send you a random ass picture / video
ov!blowjob    :: Send you random blowjob picture / video
ov!boobs      :: Send you a random boobs picture / video

== Utility ==
ov!poll       :: Create a poll in the server
ov!ws         :: Set a specific channel to send welcome message when a new member joined your server
ov!gs         :: Set a specific channel to send goodbye message when member leave your server\`\`\`]
    $color[#00FFFF]
    $addTimestamp
    $reply[$messageID;true]
    $clientTyping
    $footer[Requested by $userTag[$mentioned[$message]];$userAvatar[$mentioned[$message]]]`
}