function searchCity(city) {
  let apiKey = "909b8442652f5664177e8fdeb05b79ad7a";
  let units = "imperial";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
  console.log(apiUrl);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = searchInput.value;
  searchCity(city);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
