const resultField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert");
const fromTypeTemp = document.querySelector("#from-temp-type");
const toTypeTemp = document.querySelector("#to-temp-type");

def = window.addEventListener("load", () => {
    degree.value = "";
    resultField.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    if(degree.value === ""){
        
        alert("Please enter a value");
        resultField.innerHTML = "";
        def;
    }
    
    convertedValue = parseFloat(degree.value);

      
    if (fromTypeTemp.value === "celsius" && toTypeTemp.value === "fahrenheit") {
        const fahrenheit = (convertedValue * 9/5) + 32;
        resultField.innerHTML = fahrenheit.toFixed(2) + "°F";
    }
    else if(fromTypeTemp.value === "fahrenheit" && toTypeTemp.value === "celsius") {
        const celsius = (convertedValue - 32) * 5/9;
        resultField.innerHTML = celsius.toFixed(2) + "°C";
    }
    else if(fromTypeTemp.value === "celsius" && toTypeTemp.value === "kelvin") {
        const kelvin = convertedValue + 273.15;
        resultField.innerHTML = kelvin.toFixed(2) + "K";
    }
    else if(fromTypeTemp.value === "kelvin" && toTypeTemp.value === "celsius") {
        const celsius = convertedValue - 273.15;
        resultField.innerHTML = celsius.toFixed(2) + "°C";
    }
    else if(fromTypeTemp.value === "fahrenheit" && toTypeTemp.value === "kelvin") {
        const kelvin = (convertedValue - 32) * 5/9 + 273.15;
        resultField.innerHTML = kelvin.toFixed(2) + "K";
    }
    else if(fromTypeTemp.value === "kelvin" && toTypeTemp.value === "fahrenheit"){
        const fahrenheit = (convertedValue - 273.15) * 9/5 + 32;
        resultField.innerHTML = fahrenheit.toFixed(2) + "°F";
    }
    else{
        resultField.innerHTML = `${convertedValue}  ${fromTypeTemp.value === "celsius" ? "°C" : fromTypeTemp.value === "fahrenheit" ? "°F" : "K"}`;
        if(degreeValue === ""){
            resultField.innerHTML = "";
        }
    }
    
    


});

