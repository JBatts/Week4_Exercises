


function parseAndDisplayName(name1) {
    let firstBreak = name1.indexOf(" ")
    let lastBreak = name1.lastIndexOf(" ")

    let first = (firstBreak !== -1) ? name1.substring(0, firstBreak) : name1;
    console.log(name1)
    console.log(first)

    if (lastBreak !== -1 && lastBreak !== firstBreak) {
        let middle = name1.substring(firstBreak + 1, lastBreak)
        console.log(middle)
    } else {
        console.log(`You have no middle name`)
    }

    if (lastBreak !== -1) {
        let last = name1.substring(lastBreak + 1)
        console.log(last)
    } else {
        console.log(`You have no last name`)
    }
    // console.log(last)



}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");