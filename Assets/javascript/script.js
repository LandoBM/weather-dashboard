// API Key from Open Weather Map
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=e6c69d7bf2289a95c8c956423a13b208"
var apiKey = 'e6c69d7bf2289a95c8c956423a13b208'
var city 
var currentCity = document.querySelectorAll('.currCity')
iconLink = `http://openweathermap.org/img/wn/@2x.png`

// Pull the Current Day and Date
const date = moment().format('dddd MMMM Do YYYY')
const futureDates = moment().format('MMM Do YY')
// console.log(date)

function getWeather (city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`)
    .then(function (response) {
        // console.log(response)
        return response.json()
    })
    .then(function (data){
        console.log(data)
        cityInput = data.city.name
        console.log(cityInput)
        iconEL = data.list[0].weather[0].icon
        console.log(iconEL)
        cm = data.list[0].weather[0].main
        console.log(cm)
        ct = data.list[0].main.temp
        console.log(ct)
        cf = data.list[0].main.feels_like
        console.log(cf)
        ch = data.list[0].main.humidity
        console.log(ch)
        cw = data.list[0].wind.speed
        console.log(cw)
        currentWeather(data)
        fiveDayWeather(data)
    
    })
}

var iconLink = `https://openweathermap.org/img/wn/`
function fiveDayWeather(data) {
  const futureForecast = document.getElementById('futureCards')
  futureForecast.innerHTML = `
    <div class="row futureForecast mb-3" id="futureCards">
        <div class="card text-white bg-info mb-3 cardOne" style="max-width: 150px;">
            <div class="card-header futureDayDate">${moment(`${data.list[8].dt_txt}`).format('ll')}</div>
            <div class="card-body weatherFuture">
            <img id="icon" src="${iconLink}${data.list[8].weather[0].icon}.png">
            <p>${data.list[8].weather[0].main} </p>
            <p id="ft">Temperature: ${data.list[8].main.temp}°F</p>
            <p id="fh">Humidity: ${data.list[8].main.humidity}% </p>
            <p id="ff">Feels Like: ${data.list[8].main.feels_like}°F</p>
            <p id="fw">Wind: ${data.list[8].wind.speed} mph</p>
            </div>
        </div>
        <div class="card text-white bg-info mb-3 cardOne" style="max-width: 150px;">
            <div class="card-header futureDayDate">${moment(`${data.list[16].dt_txt}`).format('ll')}</div>
            <div class="card-body weatherFuture">
            <img id="icon" src="${iconLink}${data.list[16].weather[0].icon}.png">
            <p>${data.list[16].weather[0].main} </p>
            <p id="ft">Temperature: ${data.list[16].main.temp}°F</p>
            <p id="fh">Humidity: ${data.list[16].main.humidity}% </p>
            <p id="ff">Feels Like: ${data.list[16].main.feels_like}°F</p>
            <p id="fw">Wind: ${data.list[16].wind.speed} mph</p>
            </div>
        </div>
        <div class="card text-white bg-info mb-3 cardOne" style="max-width: 150px;">
            <div class="card-header futureDayDate">${moment(`${data.list[24].dt_txt}`).format('ll')}</div>
            <div class="card-body weatherFuture">
            <img id="icon" src="${iconLink}${data.list[24].weather[0].icon}.png">
            <p>${data.list[24].weather[0].main} </p>
            <p id="ft">Temperature: ${data.list[24].main.temp}°F</p>
            <p id="fh">Humidity: ${data.list[24].main.humidity}% </p>
            <p id="ff">Feels Like: ${data.list[24].main.feels_like}°F</p>
            <p id="fw">Wind: ${data.list[24].wind.speed} mph</p>
            </div>
        </div>
        <div class="card text-white bg-info mb-3 cardOne" style="max-width: 150px;">
            <div class="card-header futureDayDate">${moment(`${data.list[32].dt_txt}`).format('ll')}</div>
            <div class="card-body weatherFuture">
            <img id="icon" src="${iconLink}${data.list[32].weather[0].icon}.png">
            <p>${data.list[32].weather[0].main} </p>
            <p id="ft">Temperature: ${data.list[32].main.temp}°F</p>
            <p id="fh">Humidity: ${data.list[32].main.humidity}% </p>
            <p id="ff">Feels Like: ${data.list[32].main.feels_like}°F</p>
            <p id="fw">Wind: ${data.list[32].wind.speed} mph</p>
            </div>
        </div>
        <div class="card text-white bg-info mb-3 cardOne" style="max-width: 150px;">
        <div class="card-header futureDayDate">${moment(`${data.list[39].dt_txt}`).format('ll')}</div>
        <div class="card-body weatherFuture">
        <img id="icon" src="${iconLink}${data.list[39].weather[0].icon}.png">
        <p>${data.list[39].weather[0].main} </p>
        <p id="ft">Temperature: ${data.list[39].main.temp}°F</p>
        <p id="fh">Humidity: ${data.list[39].main.humidity}% </p>
        <p id="ff">Feels Like: ${data.list[39].main.feels_like}°F</p>
        <p id="fw">Wind: ${data.list[39].wind.speed} mph</p>
        </div>
    </div>
    </div>`
} 

function currentWeather (data) {
    const currentDay = document.querySelector('#currentDay')
     currentDay.innerHTML = `<div class="card bg-secondary mb-3" style="max-width: 450px;">
            <h2 class="card-header currentDayCity">${cityInput}</h2>
            <h3 class="card-header">${date}</h3>
            <div class="card-body currentDayBody">
                <img id="icon" src="http://openweathermap.org/img/wn/${iconEL}@2x.png">
                <p id='cm'> ${cm}</p>
                <p id="ct">Temperature:${ct}°F</p>
                <p id="ch">Humidity:${ch}%</p>
                <p id="cf">Feels Like:${cf}°F</p>
                <p id="cw">Wind:${cw}mph</p>
            </div>
        </div>`
}


var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || []
for (i = 0; i < searchHistory.length; i++) {
    var button = document.getElementsByClassName('.btn')
    var hisBtn = document.querySelector('.hisBtn')
    button.textContent = searchHistory[i]
    hisBtn.appendChild(button)
    button.addEventListener('click', fetchWeather)
}

var citySearch = document.getElementById('search')
var searchEvent = document.getElementById('searchBtn')

searchEvent.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(citySearch.value)
    getWeather(citySearch.value)
    if (citySearch.value === ''){
        console.log(`Search A City`)
    } else {
        searchHistory.push(citySearch.value)
        localStorage.setItem('searched', JSON.stringify(searchHistory))
    }
})

function fetchWeather(event) {
    getWeather(event.target.textContent)
}

