function displayMailingLabel(name, address, city, state, zip) {
    console.log(`Hello ${name}! Your mailing address is the following.`)
    console.log(`Address: ${address}`)
    console.log(`State: ${state}`)
    console.log(`City: ${city}`)
    console.log(`Zip: ${zip}`)
}

function addNumbers(num1, num2) {
    someNum = num1 + num2
    console.log(someNum)
}

function displayReceipt(totalDue, amountPaid) {
    console.log(`Total Due: $${totalDue.toFixed(2)}`)
    console.log(`Amount Paid: $${amountPaid.toFixed(2)}`)

    if (amountPaid > totalDue) {
        let change = amountPaid - totalDue
        console.log(`Change Due: $${change.toFixed(2)}`)
        } else if (amountPaid < totalDue) {
            let total = totalDue - amountPaid
            console.log(`You are going to need to pay $${total.toFixed(2)}`)
        } else if (amountPaid = totalDue) {
            console.log(`You paid the perfect amount!`)
    }
}

    displayMailingLabel("Jalen Battle", "4340 Sandalwood Way", "Cumming", "Georgia", 30004)
    displayMailingLabel("Donald Battle", "12866 Deer Park Lane", "Alpharetta", "Georgia", 30041)

    addNumbers(99.75, 12.15)
    addNumbers(24, 46)

    displayReceipt(50.99, 109.00)
    displayReceipt(20.99, 20.99)
    displayReceipt(41.99, 30.00)