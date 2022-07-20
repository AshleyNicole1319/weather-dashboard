var cities = []
var InputSearchEl = document.querySelector("#searchcity");
var cityEl = document.querySelector("#city");
var historyEl = document.querySelector("#history-btns");
var currentWeatherEl = document.querySelector("#currentweather");
var searchedCityEl = document.querySelector("#searchedfor");
var weatherContainerEl = document.querySelector("#weathercontainer");
var fiveDaysEl = document.querySelector("#fiveday");
var forecastEl = document.querySelector("#forecast");
var displayFiveEl = document.querySelector("#fivedisplay")

var saveSearch = function(){
    localStorage.setItem("cities", JSON.stringify(cities));
}
