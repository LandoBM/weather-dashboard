// API Key from Open Weather Map
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=e6c69d7bf2289a95c8c956423a13b208"
var apiKey = 'e6c69d7bf2289a95c8c956423a13b208'
var city = 'Atlanta'
var currentWeather = document.querySelectorAll('.currentWeather')
var currentDayWeather = document.querySelectorAll('.currentDayBody')
var currentTemp =document.querySelectorAll('.currentTemp')

// Pull the Current Day and Date
var date = document.querySelectorAll('.currentDayDate')
var futureDate = document.querySelectorAll('.futureDayDate')
// console.log(date)

function searchDisplay (){
    var searchHistory = JSON.parse(localStorage.getItem('searched')) || [];
    for (i = 0; i < searchHistory.length; i++) {
        var button = document.getElementsByClassName('.btn')
        var hisBtn = document.querySelector('.hisBtn')
        button.textContent = searchHistory[i]
        hisBtn.appendChild(button)
        button.addEventListener('click', grabWeather)
    }
    
}

var cityInput = document.querySelector('#search')
var searchBtn = document.getElementById('searchBtn')

searchBtn.on("click", function (event) {
    event.preventDefault()
    console.log(cityInput.value)
    getWeather(cityInput.value)
    if (cityInput.value ==''){
        console.log(`Enter a City`)
    } else if (searched.append(cityInput.value)) {
        JSON.parse(localStorage.getItem('searched')) || []
    } else {
        searched.push(cityInput.value)
        localStorage.setItem('searched', JSON.stringify(searched))
    }
})

// function deleteLocalS (){
//     localStorage.removeItem('searched')
//     $('.hisBtn').html('')
//     searchHistory = []
// }

function grabWeather(event) {
    getWeather(event.target.textContent)
}




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
    fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`)
    .then(function (response){
        return response.json()
    })
    .then(function(data){
      app.showWeather(data)
    })
} 

function showWeather(response){
    console.log(response)
    let row = document.querySelector('row.futureForecast')

    row.innerHTML = response.list.map((day, idx) => {
    if(idx <= 5){
        let dt = new Date(day.dt *1000)
        return `<div class="card text-white bg-info mb-3 cardOne" style="max-width: 150px;">
        <div class="card-header futureDayDate">${dt.toDateString()}</div>
        <div class="card-body weatherFuture">
        <img src="https://openweathermap.org/img/wn/"+ ${day.weather[0].icon}+".png"
        <p id="ft">${day.main[0].temp}</p>
        <p id="fd">${day.weather[0].description}</p>
        <p id="fh">${day.main[0].humidity}</p>
        <p id="ff">Feels Like: </p>
        <p id="fw">Wind: </p>
        </div>
        </div>`

    }
    }).join('')
}
