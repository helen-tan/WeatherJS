// Init weather object
const weather = new Weather('Singapore');

const ui = new UI();

// Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Tokyo');

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    weather.changeLocation('Tokyo');
    // Get and display weather
    getWeather();
    // Close Modal
});

function getWeather() {
    weather.getWeather()
        .then(results => {
            // console.log(results);
            ui.paint(results);
        })
        .catch(err => console.log(err));
}
