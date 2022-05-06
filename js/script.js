// function getWeather(city) {
//     var oneCallBaseEndPoint = 'https://api.openweathermap.org/data/2.5/onecall'
//     var API_KEY = '4253ae682bded8fe54667e18d996e279';
//     var weatherBaseEndPoint = 'https://api.openweathermap.org/data/2.5/weather';
//     fetch(weatherBaseEndPoint + `?q=${encodeURI(city)}&appid=${API_KEY}`)
//     .then(weatherRes => weatherRes.json())
//     .then(weatherData => {
//         console.log('weather data', weatherData)
//         var lat = weatherData.coord.lat;
//         var lon = weatherData.coord.lon;
//         console.log('lat and lon', { lat, lon })
//         fetch(oneCallBaseEndPoint + `?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
//         .then(oneCallRes => oneCallRes.json())
//         .then(oneCallData => {
//             var currentWeather = oneCallData.current.weather[0].main
//             console.log('currentWeather', currentWeather)
//             document.querySelector('#weather').textContent = currentWeather
//             console.log(oneCallData)
//             })
//         })
//     }
// document.querySelector('#search').addEventListener('click', function() {
//     var inputedCity = document.querySelector('#cityInput').value
//     console.log('city', inputedCity)
//     getWeather(inputedCity)
// })

//fetch API data
//should follow this format
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
const url = 'https://api.openweathermap.org/data/2.5/onecall'
const API_Key = 'd91f911bcf2c0f925fb6535547a5ddc9';
var part = '';
var lat = '';
var lon  = '';

//get latitude longitude
var baseUrl = 'http://api.openweathermap.org/geo/1.0/direct'
return fetch(`${baseUrl}?q=${name}&limit=5&appid=${API_KEY}`)
.then(res => res.json())
.then(data => {
    console.log(data)
    return ({ 
        coords: {
            lat: data[0].lat, 
            lon: data[0].lon 
            },
        name: data[0].name
        })
    })
.catch(err => console.log(err))