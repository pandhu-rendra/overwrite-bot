module.exports = {
    name: "ping",
    category: "information",
    executeAt: "both",
    code: `
    **🏓 Pong!** \`\`$pingms\`\`
    $reply[$messageID;true]
    $clientTyping`
}