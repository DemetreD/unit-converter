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
  metersToFeet.innerHTML = `${inputEl.value} meters = ${meterToFeet(inputEl.value).toFixed(3)} feet | ${inputEl.value} feet = ${feetToMeter(inputEl.value).toFixed(3)} meters`;

  literToGallon.innerHTML = `${inputEl.value} liters = ${litersToGallon(inputEl.value).toFixed(3)} gallons | ${inputEl.value} gallons = ${gallonToLiter(inputEl.value).toFixed(3)} liters`;

  kiloToPound.innerHTML = `${inputEl.value} kilos = ${kilosToPounds(inputEl.value).toFixed(3)} pounds | ${inputEl.value} pounds = ${poundsToKilos(inputEl.value).toFixed(3)} kilos`;
});
