// API Key from Open Weather Map
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=e6c69d7bf2289a95c8c956423a13b208"
var apiKey = 'e6c69d7bf2289a95c8c956423a13b208'
// var city = 'Atlanta'
var currentWeather = document.querySelectorAll('.currentWeather')
var currentDayWeather = document.querySelectorAll('.currentDayBody')
var futureDayWeather = document.querySelectorAll('.weatherFuture')
var currentTemp =document.querySelectorAll('.currentTemp')

// Pull the Current Day and Date
var date = document.querySelectorAll('.currentDayDate')
var futureDate = document.querySelectorAll('.futureDayDate')
// console.log(date)

// function getAPI () {
//     fetch (`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apikey}`)
//     .then (function (response) {
//         console.log(response)
//         return response.json()
//     })
//     .then(function (data){
//         // debugger
//         console.log(data)
//     })
// }



function getWeather (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
    .then(function (response) {
        console.log(response)
        return response.json()
    })
    .then(function (data){
       console.log(displayWeather(data))
    })

    function displayWeather (data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp,feels_like, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,feels_like,humidity,speed)
        document.querySelector('.currentDayCity').innerHTML= name
        document.querySelector('#icon').src = "https://openweathermap.org/img/wn/"+ icon +".png"
        document.querySelector('#ct').innerHTML = "Temperature: " + temp + '°F'
        document.querySelector('#cd').innerHTML= "Descriptions: " + description
        document.querySelector('#cf').innerHTML= "Feels Like: "+ feels_like + '°F'
        document.querySelector('#ch').innerHTML= "Humidity: "+ humidity + '%'
        document.querySelector('#cw').innerHTML= "Wind Speed: "+ speed + "MPH"
    }
}

function fiveDayWeather() {
    fetch (`api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`)
    .then(function (response){
        console.log(response)
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })

    function displayFiveDay (data){
        const {dt_txt} = data
        const {icon,description} = data.weather
        const {temp,feels_like,humidity} = data.main
        const {speed} = data.wind
    }
} 