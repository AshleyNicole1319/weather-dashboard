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

//Connect API
var cityWeather = function(city){
    var apiKey = "1767dcfe210ef96ad104c047ad61f1bb";
    var apiUrl =  ("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey);


fetch(apiUrl).then(function(response){
    if(response.ok){
        console.log(response);
        response.json().then(function(data){
            console.log(data);
            getWeather(data,city);
        });
    }else{
        alert("Error");
    }   
})
.catch(function(error){
    alert("Unable to connect");
});
};

//Form Stuff

//Weather Variables

//Make Action Work on "Submit"
