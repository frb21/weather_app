
//SET API KEY 
//SET API URL
//HANDLE CITY INPUTS
//EVENT LISTENERS
//FUNCTION TO FETCH WEATHER DATA VIA API KEY AND ACCESSING API URL
//RENDER WEATHER DATA

const apiKey = 'd30641dafacc86336b44e2f36a423892';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locElement =  document.getElementById('location');
const tempElement = document.getElementById('temperature');
const descriptElement = document.getElementById('description');
const windElement = document.getElementById('wind');
const entry = document.getElementById('city');
const searchButton = document.getElementById('searchButton');
const weatherIconElement = document.getElementById('weatherIcon');


searchButton.addEventListener('click', () => {
    const loc = entry.value;
    if(loc){
        fetchWeather(loc);
    }
});


function fetchWeather(loc){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}&units=metric`;  
    fetch(url)
        .then(response => {
            console.log(response);
            return response.json()})
        .then(data => {
            locElement.textContent = data.name;
            tempElement.textContent = `${Math.round(data.main.temp)}°C`;
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; 
            weatherIconElement.src = iconUrl;    
            windElement.textContent = `${data.wind.speed} m/s`;
            descriptElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Failure to fetch weather data:', error);
        });
}





























