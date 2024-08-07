module.exports = {
    name: "4k",
    code: `
    $color[#00FFFF]
    $image[
    $jsonRequest[https://nekobot.xyz/api/image?type=4k;message;]
    ]
    $onlyNSFW[You can't use that command here!]
    $footer[Requested by $userTag[$authorID]]
    $reply
    $addTimestamp
    $clientTyping`
}