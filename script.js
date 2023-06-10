function convertTemperature() {
  var celsius = parseFloat(document.getElementById("celsiusInput").value);
  var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
  var kelvin = parseFloat(document.getElementById("kelvinInput").value);

  if (!isNaN(celsius)) {
    var convertedFahrenheit = (celsius * 9) / 5 + 32;
    var convertedKelvin = celsius + 273.15;
    document.getElementById("fahrenheitInput").value =
      convertedFahrenheit.toFixed(2);
    document.getElementById("kelvinInput").value = convertedKelvin.toFixed(2);
  } else if (!isNaN(fahrenheit)) {
    var convertedCelsius = ((fahrenheit - 32) * 5) / 9;
    var convertedKelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;
    document.getElementById("celsiusInput").value = convertedCelsius.toFixed(2);
    document.getElementById("kelvinInput").value = convertedKelvin.toFixed(2);
  } else if (!isNaN(kelvin)) {
    var convertedCelsius = kelvin - 273.15;
    var convertedFahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
    document.getElementById("celsiusInput").value = convertedCelsius.toFixed(2);
    document.getElementById("fahrenheitInput").value =
      convertedFahrenheit.toFixed(2);
  }
}
