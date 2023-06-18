import { ICONS_SRC } from "./data.js";

const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "ff9a92deb11480f9014deb01fb57bd09";
const DEFAULT_CITY = 'Rome';

const FORM = document.querySelector(".search-form");
const KELCIN_TO_CELSIUS = (k) => Math.round(k - 273.15);
const SEARCH_TARGET_WEATHER_OBJECT = {
	name: '',
	state: '',
	temp: '',
	feels_like: '',
	sunrise: '',
	sunset: '',
	icon: '',
};

document.addEventListener('DOMContentLoaded', onload_tab);
FORM.addEventListener("submit", formHandler);


function onload_tab(){
	getWeatherData(serverUrl, DEFAULT_CITY, apiKey);
	render_Now();
}

function formHandler(event) {
	event.preventDefault();

  	getWeatherData(serverUrl, getCityName(), apiKey);
}


function getWeatherData(serverUrl, cityName, apiKey) {
	const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
	fetch(url)
	  .then((response) => response.json())
	  .then((weatherData) => SEARCH_TARGET_WEATHER(weatherData, SEARCH_TARGET_WEATHER_OBJECT))
	  .catch(error => alert("Error. Please try again later."));
}

function getCityName() {
	let input = FORM.querySelector("input");
	let inputValue = input.value;
	return inputValue;
}

function SEARCH_TARGET_WEATHER(data, object) {
	object.name = data.name;
	object.temp = KELCIN_TO_CELSIUS(data.main.temp);
	object.state = data.weather[0].main;
	object.icon = ICONS_SRC[object.state];

	return object;
}

function render_Now(){
	
	console.log(SEARCH_TARGET_WEATHER_OBJECT);

	let tab = document.querySelector("#Now");
 	let currentTemp = tab.querySelector(".temperature");
	let currentCity = tab.querySelector(".city-wrapper").querySelector(".active-city");
	let weatherIco = tab.querySelector(".icon");

	console.log(SEARCH_TARGET_WEATHER_OBJECT.state);

	currentTemp.textContent = `${SEARCH_TARGET_WEATHER_OBJECT.temp}°`;
	currentCity.textContent = SEARCH_TARGET_WEATHER_OBJECT.name;
	weatherIco.src = SEARCH_TARGET_WEATHER_OBJECT.icon;
}

export {SEARCH_TARGET_WEATHER_OBJECT};