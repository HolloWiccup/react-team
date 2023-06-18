const FORM = document.querySelector(".search-form");
const KELCIN_TO_CELSIUS = (k) => Math.round(k - 273.15);
const LIKE_BUTTON = document.querySelector(".like");
let currentCityName = document.querySelector(".active-city").textContent;

FORM.addEventListener("submit", formHandler);
FAV_ICO.addEventListener("click", createFavCity);

function formHandler(event) {
  event.preventDefault();
 
  getWeatherData();
  rebootFavIco();
}

function getWeatherData() {
  const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
  let cityName = getCityName();
  const apiKey = "ff9a92deb11480f9014deb01fb57bd09";
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((weatherData) => render(weatherData))
	 .catch(error => alert("Error. Please try again later."));
}

function getCityName() {
  let input = FORM.querySelector("input");
  let inputValue = input.value;
  return inputValue;
}

function render(data) {
  let tab = document.querySelector("#Now");
  let currentTemp = tab.querySelector(".temperature");
  let currentCity = tab
    .querySelector(".city-wrapper")
    .querySelector(".active-city");
  let weatherIco = tab.querySelector(".icon");

  currentTemp.textContent = `${KELCIN_TO_CELSIUS(data.main.temp)}°`;
  currentCity.textContent = `${data.name}`;
  weatherIco.src = `./img/weather-state/${data.weather[0].main}.svg`;

  currentCityName = `${data.name}`;
  return currentCityName;
}

function createFavCity(){
	updateFavIco();
	createElement("li","class" ,"city-in-fav-list" ,currentCityName, ".city-list-wrapper");
}

function updateFavIco(){
	if(!FAV_ICO.src.includes("black"))
		FAV_ICO.src = "./img/heart-shape-black.svg";
	else FAV_ICO.src = "./img/heart-shape.svg";
}

function rebootFavIco(){
	let favorites = document.querySelectorAll(".city-in-fav-list");
	for (let item of favorites){
		if (!item.innerHTML === currentCityName) 
		FAV_ICO.src = "./img/heart-shape.svg";
	}

}

function createElement(tag, atributeName, atributeValue, textContent, location){
	let element = document.createElement(tag);
	element.setAttribute(atributeName, atributeValue);
	element.textContent = `${textContent}`;
	let parentElement = document.querySelector(location);
	parentElement.append(element);

}

// let response = await fetch(url);
// let weatherData = await response.json();

// console.log(weatherData);

// fetch(url)
// .then(response => response.json())
// .then(weatherData => console.log(weatherData));
