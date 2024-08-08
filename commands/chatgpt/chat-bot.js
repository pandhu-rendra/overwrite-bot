module.exports = {
    name: "$alwaysExecute",
    code:`
    $title[<:ov1:1271069769784754176><:ov2:1271069771990831135><:ov3:1271069758443360307><:ov4:1271069760754552865><:ov5:1271069763098902641><:ov6:1271069765091328050><:ov7:1271069767545131079>]
    $description[
        $httpRequest[https://api.wl-std.com/gpt?key=$getVar[groq_api_key]&msg=$message;GET]
    ]
    $color[#00FFFF]
    $onlyIf[$channelId==$getGuildVar[channel]]
    `
}