let dateObj = new Date()

function toString() {
    
    let date = dateObj.toString();
    return date
}

function toDateString() {
    let date = dateObj.toDateString();
    return date 
}

function toUTCString(){
    let date = dateObj.toUTCString();
    return date
}

function toLocaleString() {
    let date = dateObj.toLocaleString();
    return date
}
console.log(toString())
console.log(toDateString())
console.log(toUTCString())
console.log(toLocaleString())