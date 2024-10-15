function getSocSecTax(taxableWages) {
    let taxRate = .062
    let socSecTax = Number(taxableWages) * Number(taxRate)
    return socSecTax.toFixed(2)
}

function getMedicareTax(taxableWages) {
    let taxRate = .0145
    let medicareTax = Number(taxableWages) * Number(taxRate)
    return medicareTax.toFixed(2)
}

function getFederalTax(taxableWages, withCode) {
    let taxRate;

    if(withCode === 1) {
        taxRate = .21
        
    } else if (withCode === 2) {
        taxRate = .195

    } else if (withCode === 0) {
        taxRate = .23;

    } else if (withCode === 3) {
        taxRate = .185;

    } else if (withCode >= 4) {
        taxRate = .18 + (0.5 *(withCode - 4));
    }
    
    let federalTax = Number(taxableWages) * Number(taxRate)
    return federalTax.toFixed(2)

}

let taxableWages = 1100
let withCode = 6


let medicareTax = getMedicareTax(taxableWages)
let socSecTax = getSocSecTax(taxableWages)
let federalTax = getFederalTax(taxableWages, withCode)

console.log(medicareTax)
console.log(socSecTax)
console.log(federalTax)