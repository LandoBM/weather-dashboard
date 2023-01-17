// API Key from Open Weather Map
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=e6c69d7bf2289a95c8c956423a13b208"
var apiKey = 'e6c69d7bf2289a95c8c956423a13b208'
var city 
var currentCity = document.querySelectorAll('.currCity')

// Pull the Current Day and Date
const date = moment().format('dddd MMMM Do YYYY')
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
        icon = data.list[0].weather[0].icon
        console.log(icon)
        ct = data.list[0].main.temp
        console.log(ct)
        cd = data.list[0].weather.main
        console.log(cd)
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

function fiveDayWeather(data) {
  const futureForecast = document.getElementById('futureCards')
  futureForecast.innerHTML = `
    <div class="row futureForecast mb-3" id="futureCards">
        <div class="card text-white bg-info mb-3 cardOne" style="max-width: 150px;">
            <div class="card-header futureDayDate">Date</div>
            <div class="card-body weatherFuture">
            <img id="icon" src="http://openweathermap.org/img/wn/10d@2x.png">
            <p id="ft">Temperature: 64°F</p>
            <p id="fd">Description:Description</p>
            <p id="fh">Humidity: 25% </p>
            <p id="ff">Feels Like: 55°F</p>
            <p id="fw">Wind: 3mph</p>
            </div>
        </div>
        <div class="card text-white bg-info mb-3 cardOne" style="max-width: 150px;">
            <div class="card-header futureDayDate">Date</div>
            <div class="card-body weatherFuture">
            <img id="icon" src="http://openweathermap.org/img/wn/10d@2x.png">
            <p id="ft">Temperature: 64°F</p>
            <p id="fd">Description:Description</p>
            <p id="fh">Humidity: 25% </p>
            <p id="ff">Feels Like: 55°F</p>
            <p id="fw">Wind: 3mph</p>
            </div>
        </div>
        <div class="card text-white bg-info mb-3 cardOne" style="max-width: 150px;">
            <div class="card-header futureDayDate">Date</div>
            <div class="card-body weatherFuture">
            <img id="icon" src="http://openweathermap.org/img/wn/10d@2x.png">
            <p id="ft">Temperature: 64°F</p>
            <p id="fd">Description:Description</p>
            <p id="fh">Humidity: 25% </p>
            <p id="ff">Feels Like: 55°F</p>
            <p id="fw">Wind: 3mph</p>
            </div>
        </div>
        <div class="card text-white bg-info mb-3 cardOne" style="max-width: 150px;">
            <div class="card-header futureDayDate">Date</div>
            <div class="card-body weatherFuture">
            <img id="icon" src="http://openweathermap.org/img/wn/10d@2x.png">
            <p id="ft">Temperature: 64°F</p>
            <p id="fd">Description:Description</p>
            <p id="fh">Humidity: 25% </p>
            <p id="ff">Feels Like: 55°F</p>
            <p id="fw">Wind: 3mph</p>
            </div>
        </div>
        <div class="card text-white bg-info mb-3 cardOne" style="max-width: 150px;">
            <div class="card-header futureDayDate">Date</div>
            <div class="card-body weatherFuture">
            <img id="icon" src="http://openweathermap.org/img/wn/10d@2x.png">
            <p id="ft">Temperature: 64°F</p>
            <p id="fd">Description:Description</p>
            <p id="fh">Humidity: 25% </p>
            <p id="ff">Feels Like: 55°F</p>
            <p id="fw">Wind: 3mph</p>
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
                <img id="icon" src="http://openweathermap.org/img/wn/${icon}@2x.png">
                <p id="ct">Temperature:${ct}°F</p>
                <p id="cd">Description:${cd}</p>
                <p id="ch">Humidity:${ch}%</p>
                <p id="cf">Feels Like:${cf}°F</p>
                <p id="cw">Wind:${cw}mph</p>
            </div>
        </div>`
}

// function searchDisplay (){
//     var searchHistory = JSON.parse(localStorage.getItem('searched')) || [];
//     for (i = 0; i < searchHistory.length; i++) {
//         var button = document.getElementsByClassName('.btn')
//         var hisBtn = document.querySelector('.hisBtn')
//         button.textContent = searchHistory[i]
//         hisBtn.appendChild(button)
//         button.addEventListener('click', fetchWeather)
//     }
    
// }
var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || []
for (i = 0; i < searchHistory.length; i++) {
    var button = document.getElementsByClassName('.btn')
    var hisBtn = document.querySelector('.hisBtn')
    button.textContent = searchHistory[i]
    hisBtn.appendChild(button)
    button.addEventListener('click', fetchWeather)
}

var city = document.querySelector('#search')
var searchEvent = document.querySelector('#searchBtn')

searchEvent.addEventListener("click", (event) => {
    event.preventDefault()
    console.log(city.value)
    getWeather(city.value)
    if (city.value ==''){
        console.log(`Search A City`)
    } else if (searched.append(city.value)) {
        JSON.parse(localStorage.getItem('searched')) || []
    } else {
        searched.push(city.value)
        localStorage.setItem('searched', JSON.stringify(searched))
    }
})

function fetchWeather(event) {
    getWeather(event.target.textContent)
}

