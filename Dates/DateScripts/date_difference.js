let startDate = new Date("July 11, 2022")
let endDate = new Date("November 11, 2022")


function daysInbetweeen() {
    let msec_per_day = 1000 * 60 * 60 * 24
    let elapsedMillisecond = endDate.getTime() - startDate.getTime();
    let dayDiff = elapsedMillisecond / msec_per_day
    let numDays = Math.round(dayDiff)

    return `The number of days between dates is ${numDays}`
}

console.log(daysInbetweeen())