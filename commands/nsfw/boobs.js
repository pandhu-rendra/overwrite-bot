module.exports = {
    name: "boobs",
    code: `
    $color[#00FFFF]
    $image[
    $jsonRequest[https://nekobot.xyz/api/image?type=boobs;message;]
    ]
    $onlyNSFW[You can't use that command here!]
    $footer[Requested by $userTag[$authorID]]
    $reply
    $addTimestamp
    $clientTyping`
}