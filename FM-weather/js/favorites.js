import { SEARCH_TARGET_WEATHER_OBJECT } from "./test.js";
import { ICONS_SRC, ELEMENT, CLASS } from "./data.js";

const FAV_CITIES = [];
const LIKE_BUTTON = document.querySelector(".like");

function like_Interaction(FAV_CITIES, SEARCH_TARGET_WEATHER_OBJECT){ 
	FAV_CITIES.includes(SEARCH_TARGET_WEATHER_OBJECT) ? 
		FAV_CITIES.splice(SEARCH_TARGET_WEATHER_OBJECT) : 
		FAV_CITIES.push(SEARCH_TARGET_WEATHER_OBJECT);

	return FAV_CITIES;
}

function like_icon_update(FAV_CITIES, SEARCH_TARGET_WEATHER_OBJECT, LIKE_BUTTON){
	FAV_CITIES.includes(SEARCH_TARGET_WEATHER_OBJECT) ? 
		LIKE_BUTTON.src = ICONS_SRC.HERAT_BLACK :
		LIKE_BUTTON.src = ICONS_SRC.HEART;

	return LIKE_BUTTON;
}

function createElement(
	tag,
	className,
	textContent = '',
	alt = '',
	src = ''
 ){
	const element = document.createElement(tag);
	element.className = className;
	element.textContent = textContent;
	element.alt = alt;
	element.src = src;
	return element;
 };

 function add_to_fav_list(cityName){
	let favCity = createElement('li', CLASS.FAV_CITY, cityName);
	ELEMENT.FAV_LIST.prepend(favCity);
 }