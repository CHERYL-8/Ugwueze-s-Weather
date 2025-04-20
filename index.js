function updateWeather (response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityWeather = document.querySelector("#city-weather");
    cityWeather.innerHTML = response.data.city;
    temperatureElement.innerHTML= Math.round(temperature);

}
function searchCity (city) {
    let city = cityInput.value;
    let apiKey = "c8c71f823b69ab4b8b86o3a0f1d320t8";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
    axios.get(apiUrl).then(updateWeather);
}
function handleSearchSubmit(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-input");
    
    searchCity(cityInput.value);
}
let searchTabELement = document.querySelector("#search-tab");
searchTabElement.addEventListener("submit,handleSearchSubmit");
searchCity("Enugu");