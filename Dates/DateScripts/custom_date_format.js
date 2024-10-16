function getDateTime() {
    let current = new Date()
    return current
}

function getMonth() {
    let time = getDateTime();
    let month = time.getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return monthNames[month]
}

function getDay() {
    let time = getDateTime();
    let day = time.getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return dayNames[day]
}

function getDayOfMonth() {
    let time = getDateTime();
    let daysOfMonth = time.getDate();
    return daysOfMonth
}

function getYear() {
    let time = getDateTime();
    let year = time.getFullYear();
    return year
}

function prettyDate() {
    let month = getMonth()
    let day = getDay()
    let date = getDayOfMonth()
    let year = getYear()
    let prettyDate = `${date}-${month}-${year}(${day})`
    return prettyDate
}

console.log(getDateTime())
console.log(getMonth())
console.log(getDay())
console.log(getDayOfMonth())
console.log(getYear())
console.log(prettyDate())