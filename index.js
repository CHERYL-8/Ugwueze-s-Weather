function handleSearchSubmit(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-input");
    let cityWeather = document.querySelector("#city-weather");
    cityWeather.innerHTML = cityInput.value;
    
}
let searchTabELement = document.querySelector("#search-tab");
searchTabElement.addEventListener("submit,handleSearchSubmit");