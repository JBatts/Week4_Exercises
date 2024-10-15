// give a name to a step - like T.O.C or book outline
// Purely Organization

function begin() {
    console.log("IN THE BEGINNING...")
}
function middle() {
    console.log("INTO THE HEART OF CODING...")
}
function end() {
    console.log("WRAPPING IT UP. FIN.")
}

// invoke or call
begin()
middle()
end()

///////////////////////////////////////////////////////////////
function greet(who, age) {
    console.log(`Howdy, ${who} if I had to guess you are about ${age} years old dummy.`);
    if(age >= 40) {
        console.log(`${who} do you realize you are starting to get old.`)
    } else {
        console.log(`${who} do you realize your life has just begun.`)
    }
}

greet("Kevin Hart", 57)
greet("Chris Brown", 19)