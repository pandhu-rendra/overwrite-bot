module.exports = {
    name: "ass",
    code: `
    $color[#00FFFF]
    $image[
    $jsonRequest[https://nekobot.xyz/api/image?type=ass;message;]
    ]
    $onlyNSFW[You can't use that command here!]
    $footer[Requested by $userTag[$authorID]]
    $reply
    $addTimestamp
    $clientTyping`
}