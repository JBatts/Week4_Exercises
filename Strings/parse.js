
// PARSE - paring knife, parcel
// substring(start, end) // No support for negative
//substr(start, )
// body of text is corpus

corpus = "Now is the time..."
console.log("LENGTH", corpus.length)

// i = 0
// console.log(corpus[i++])

// i is for index
// i++ is shorthand for i = i + 1
// for (initialize/start; boolean expression tell us when to stop; what we want to happen)

for(let i = 0 ; i < corpus.length; i++) {
console.log(corpus[i]) // Repeated as long as the experssion is true
}

for(let i = 0 ; i < corpus.length; i++) {
    console.log("INDEX:" + i, "LETTER:" + corpus[i], "CODE:" + corpus[i].charCodeAt(0))
}

words = corpus.split(" ")
console.log(words)
console.log("LENGTH (word count):", words.length)
console.log("ENd")
