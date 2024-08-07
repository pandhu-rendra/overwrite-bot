module.exports = {
    name: "$alwaysExecute",
    code:`
    $title[Chat Bot!]
    $description[
        $httpRequest[https://api.wl-std.com/gpt?key=$getVar[groq_api_key]&msg=$message;GET]
    ]
    $color[#00FFFF]
    $onlyIf[$channelId==$getGuildVar[channel]]
    `
}