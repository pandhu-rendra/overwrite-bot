module.exports = {
    name: "uptime",
    category: "information",
    executeAt: "both",
    code: `
    **🔋 UPTIME** \`\`$uptime[humanize]\`\`
    $reply[$messageID;true]
    $clientTyping`
}
