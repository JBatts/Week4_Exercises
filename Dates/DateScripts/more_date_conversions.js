
function birthdayDate(birthDate) {
    let dateObj = new Date(birthDate) // or let dateObj = new Date("10 / 31 / 2002")
    prettyDate = dateObj.toDateString()
    return prettyDate
}

function momsBirth(birthDate) {
    let dateObj = new Date(birthDate) 
    prettyDate = dateObj.toDateString()
    return prettyDate
}

function dadsBirth() {
    let dateObj = new Date(1976, 0, 21) 
    prettyDate = dateObj.toDateString()
    return prettyDate
}

console.log(birthdayDate("08 / 09 / 2002")) // or call dateObj as a parameter
console.log(momsBirth("Feb 14 1979"))
console.log(dadsBirth())



