eilish = "billie" // Global Scope Variable

function classRoom() { // Start Block
    // Inner Scope
    let firstName = "Jalen"; // Block (Created and Exists Here)
    // If I remove "let" / "var" / "const" the variable will become global

    console.log(`${firstName} is me!`);
    console.log(`${firstName} likes to listen to ${eilish}`) 
} // End Block

console.log(`${eilish} has infectious beats.`)

classRoom();

// firstName does not exist in the global scope
console.log(`${firstName} is our teacher`) // firstName does not exist in the global scope
// firstName is not defined resluting in an error

// Global
// Local
// Function / Block Scope {{nesting like russian doll}}