class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.desc2 = document.getElementById('w-desc2');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather){
        let iconUrl = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;

        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = (weather.main.temp - 273.15).toFixed(1) + ' \xB0C';
        this.icon.setAttribute('src', iconUrl);

        this.desc2.textContent = `Description: ${weather.weather[0].description}`;
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
    }
}