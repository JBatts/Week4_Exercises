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
        let taxRate = .21
        
    } else if (withCode === 2) {
        let taxRate = .195

    } else if (withCode === 0) {
        let taxRate = .23;

    } else if (withCode === 3) {
        let taxRate = .185;

    } else if (withCode >= 4) {
        let rate = Number(withCode) - 4
        taxRate = .18 - (0.05 * rate);
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