let timeEl =document.getElementById('time');
let dateEl = document.getElementById('date');
let currentWeatherItemEl = document.getElementById('current-weather-items');
let timeZOne = document.getElementById('time-zone');
let countryEl = document.getElementById('country');
let weatherForecastEl = document.getElementById('weather-forecast');
let currentTempEl = document.getElementById('current-temp');

let days = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' ,  ]

let months = ['Jan' , 'Febuary', 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' ,
 'October' , ' November' , 'December' ]
let API_KEY = 'd1f19bdfe0425dd932f13b7692fc00d3';

setInterval(() => {
    let time = new Date();
    let month = time.getMonth();
    let date = time.getDate();
    let day = time.getDay();
    let hour = time.getHours();
    let hourIn12HourFormat = hour >= 13 ? hour %12: hour
    let minutes = time.getMinutes();
    let ampm = hour >= 12 ? 'PM' : 'AM'

    timeEl.innerHTML = hourIn12HourFormat + ':' + minutes + ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ',' +date+  ' ' +months[month]



}, 1000);

let getWeather = () => {

    let cityName = document.querySelector("#cityName").value

axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=d1f19bdfe0425dd932f13b7692fc00d3&q=${cityName}`)

.then(function (response) {
// handle success
console.log("response is success");
console.log(response.data);
        document.querySelector("#time-zone").innerHTML =
          `${response.data.name}`
        document.querySelector("#humidity").innerHTML =
          `  ${response.data.main.humidity}%`
        document.querySelector("#pressure").innerHTML =
          `  ${response.data.main.pressure}`
        document.querySelector("#wind").innerHTML =
          `  ${response.data.wind.speed}`
          document.querySelector("#feel-like").innerHTML =
          `  ${response.data.main.feels_like}`

})
 .catch(function (error) {
  // handle errorf
  console.log(error);
})

}   

