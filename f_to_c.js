function convertFtoC(currentTemp) {
let celsiusTemp = (Number(currentTemp) - 32) * 5 / 9
return celsiusTemp.toFixed(2)
}

let currentTemp = 32
let celsiusTemp = convertFtoC(currentTemp)

console.log(celsiusTemp)