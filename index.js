function updateWeather (response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityWeather = document.querySelector("#city-weather");
    let cloudDetails = document.querySelector("#cloud-details");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    let time = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let emoji = document.querySelector("#emoji");
    cityWeather.innerHTML = response.data.city;
    time.innerHTML = formatDate(date);
    cloudDetails.innerHTML = response.data.condition.description;
    humidity.innerHTML = `${response.data.temperature.humidity}%`;
    wind.innerHTML = `${response.data.wind.speed}km/h`;
    temperatureElement.innerHTML= Math.round(temperature);
    emoji.innerHTML = `<img src="${response.data.condition.icon_url}" class="emoji" />`;

}
function formatDate (date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}
function searchCity (city) {
    let apiKey = "c8c71f823b69ab4b8b86o3a0f1d320t8";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
    axios.get(apiUrl).then(updateWeather);
}
function handleSearchSubmit(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-input");
    
    searchCity(cityInput.value);
}
function displayForecast() {
  let days = ["Fri", "Sat", "Sun", "Mon", "Tue"];
  let forecastHtml = "";
  days.forEach(function(day){
    forecastHtml =
     forecastHtml +
      `
   <div class="forecast-day">
   <div class="forecast-date">${day}</div>
    <div class="forecast-icon">☁</div>
      <div class="forecast-temperatures">
       <div class="forecast-temperature"><strong>14°</strong></div>
          <div class="forecast-temperature">7°</div>
    </div>
    </div>
`;
  });
  let forecastElement = document.querySelector("#forecast"); 
  forecastElement.innerHTML = forecastHtml;
}
let searchTab = document.querySelector("#search-tab");
searchTab.addEventListener("submit", handleSearchSubmit);
searchCity("Enugu");
displayForecast();