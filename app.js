// Init weather object
const weather = new Weather('Singapore');

// Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Tokyo');

function getWeather() {
    weather.getWeather()
        .then(results => {
            console.log(results);
        })
        .catch(err => console.log(err));
}
