function convertFtoC(currentTemp) {
    let celsiusTemp = (Number(currentTemp) * 9 / 5) + 32 
    return celsiusTemp.toFixed(2)
    }
    
    let currentTemp = 100
    let celsiusTemp = convertFtoC(currentTemp)
    
console.log(celsiusTemp)