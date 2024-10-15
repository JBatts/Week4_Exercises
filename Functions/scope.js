eilish = "billie" // Global Scope Variable

function classRoom() { // Start Block
    let firstName = "Jalen"; // Block (Created and Exists Here)
    // If I remove "let" / "var" / "const" the variable will become global
    console.log(`${firstName} is me!`);
    console.log(`${firstName} likes to listen to ${eilish}`) 
} // End Block

console.log(`${eilish} has infectious beats.`)

classRoom();

console.log(`${firstName} is our teacher`) // firstName does not exist in the global scope
// firstName is not defined resluting in an error