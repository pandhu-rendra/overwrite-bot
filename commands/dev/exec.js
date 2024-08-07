module.exports = {
    name: "execute",
    $if: "old",
    aliases: ["exec"],
    category: "dev",
    code: `
    $if[$charCount[$exec[$message]]>2000]
    $createFile[$exec[$message];result.txt]
    $else
    \`\`\`$exec[$message]\`\`\`
    $endif
    $onlyIf[$message!=;Send me an terminal command to execute!]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]`
}