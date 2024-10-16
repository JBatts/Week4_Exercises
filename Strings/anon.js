// What is a variable:
// identifying label + a value
// e.g. quantity = 123

// What is a function?
// A block of code we give a name to
// A block of code we can call as many times as we like

// A function is a value, that may or may not have identifier(function name)

// Anonymous Functions

a = 123;
b = a;
c = b;
console.log(c);

function greet(firstName) { // This is a function (Tradition)
    return "Howdy " + firstName;
}
 console.log(greet("Juck the Overlord"));


let greet2 = firstName => "Howdy " + firstName; // This is also a function (Treat a function as a value)

hi = greet2 ;

console.log(hi("Jucking"));

function bye() {
    console.log("Goodbye");
}
bye(); // invoke / call

// IIFE (immediatly invoked function expression)

(() => console.log("Goodbye and Good Riddance"))();

function bePolite(who, callback) {
    return callback(who);
}

console.log(bePolite("Little Warriors", hi));
console.log(bePolite("Little Warriors", greet));
console.log(bePolite("Little Warriors", greet2));
console.log(bePolite("Little Warriors", s => `Night Night ${s}`));
