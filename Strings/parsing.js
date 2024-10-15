
function parseAndDisplayName(name1) {
    let firstBreak = name1.indexOf(" ")
    let first = name1.substring(0, firstBreak)
    let last = name1.substring(firstBreak + 1)

    console.log(name1)
    console.log(first)
    console.log(last)
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");