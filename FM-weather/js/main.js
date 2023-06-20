import { ICONS_SRC, ELEMENT } from "./data.js";
import {FAV_CITIES, LIKE_BUTTON, likeInteraction, likeIconUpdate, addToFavList } from "./favorites.js";

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

document.addEventListener('DOMContentLoaded', onloadTab);
FORM.addEventListener('submit', formHandler);
LIKE_BUTTON.addEventListener('click', likeHandler);
ELEMENT.FAV_LIST.addEventListener('click', favListHandler);

function likeHandler(){
	likeInteraction();
	likeIconUpdate();
}

function onloadTab(){
	getWeatherData(serverUrl, DEFAULT_CITY, apiKey);
}

function formHandler(event) {
	event.preventDefault();
	
  	getWeatherData(serverUrl, getCityName(), apiKey);
	clearInput();
}

function favListHandler(event){
	if(event.target.closest('.fav-city')){
		getWeatherData(serverUrl, event.target.textContent, apiKey);
	}
	else return null;
}
	


function getWeatherData(serverUrl, cityName, apiKey) {
	const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
	fetch(url)
	  .then((response) => response.json())
	  .then((weatherData) => SEARCH_TARGET_WEATHER(weatherData, SEARCH_TARGET_WEATHER_OBJECT))
	  .then(() => renderNow())
	  .then(() => likeIconUpdate())
	  .catch(error => alert("Error. Please try again later."));
}

function getCityName() {
	let input = FORM.querySelector("input");
	let inputValue = input.value;
	return inputValue;
}

function clearInput(){
	let input = FORM.querySelector("input");
	input.value = '';
}

function SEARCH_TARGET_WEATHER(data, object) {
	object.name = data.name;
	object.temp = KELCIN_TO_CELSIUS(data.main.temp);
	object.state = data.weather[0].main;
	object.icon = `./img/weather-state/${object.state}.svg`;

	return object;
}

function renderNow(){
	
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