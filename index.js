const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const metersToFeet = document.getElementById("meter-feet");
const literToGallon = document.getElementById("liter-gallon");
const kiloToPound = document.getElementById("kilo-pound");

const meterToFeet = (meter) => meter * 3.28084;
const feetToMeter = (feet) => feet * 0.3048;
const litersToGallon = (liter) => liter * 0.264;
const gallonToLiter = (gallon) => gallon * 3.78541;
const kilosToPounds = (kilo) => kilo * 2.20462;
const poundsToKilos = (pound) => pound * 0.45359237;

convertBtn.addEventListener("click", function () {
  const inputValue = Number(inputEl.value);
  metersToFeet.textContent = `${inputValue} meters = ${meterToFeet(inputValue).toFixed(3)} feet | ${inputValue} feet = ${feetToMeter(inputValue).toFixed(3)} meters`;

  literToGallon.textContent = `${inputValue} liters = ${litersToGallon(inputValue).toFixed(3)} gallons | ${inputValue} gallons = ${gallonToLiter(inputValue).toFixed(3)} liters`;

  kiloToPound.textContent = `${inputValue} kilos = ${kilosToPounds(inputValue).toFixed(3)} pounds | ${inputValue} pounds = ${poundsToKilos(inputValue).toFixed(3)} kilos`;
});
