# WeatherJS
Look up the weather in a particular city by its city name, with the OpenWeatherMap API.

<img src="/img/demo.gif" height="500"/>

## Features
* Displays a city's current weather and other details such as temperature, relative humidity and wind speed.
* Search for another city's weather details by city name.
* The weather info of the latest searched city will remain on the page even after refreshing the browser (current city is stored in the browser's local storage)


## Built with
* HTML
* JavaScript
* Bootstrap 5
* [Bootswatch CSS](https://bootswatch.com/)
* [OpenWeatherMap API](https://openweathermap.org/current#name)

### JS Concepts utilized:
1. Fetch API - Fetching data using an external API (OpenWeatherMap API)
2. Promises
   1. Handling a resolved Promise response with ````.then()````
   2. Reading a returned response with ```.json()```
   3. Handle a rejected Promise response (error) with ```.catch()``` 
3. Async functions - async await keywords
4. Object Oriented Programming (OOP) with JS 
5. DOM Selectors
6. Event listeners & Event handlers
7. Mouse & keyboard input events
8. Event Delegation
9. Storing data with localStorage object


## See this project
You may clone this project by running this command from your terminal:

```
git clone https://github.com/helen-tan/WeatherJS
```

This will create a directory in the name of the project folder.

Once you have the project files, do the following steps:

### 1. Register for an OpenWeatherMap Account + Obtain API Key
1. Head over to https://openweathermap.org/api and register an account. For this project, we will call OpenWeatherMap's APIs with their freemium plan.
2. Once logged in, an API key can be found in the account page. Click on your username > My API Keys.
3. Copy the API Key given.

For more details on how to do this, visit OpenWeatherMap's instructions [here](https://openweathermap.org/appid#:~:text=The%20API%20key%20is%20all,additional%20API%20keys%20if%20needed.)

### 2. Create a file named config.js
The following steps is to ensure that your API key will not be pushed to a GitHub repo and become exposed as a result.
1. In the file directory, creae a file named **config.js**
2. In the config file, enter your API key (obtained in step 1) in an object like so. No other code in this file:

``` javascript
let config = {
    apiKey: 'INSERT_YOUR_API_KEY_HERE'
}
```

3. Check and ensure that in **index.html**, the following script link to the config.js file has been added:

``` html
<script src="config.js"></script>
```

4. Check and ensure that in the **.gitignore** file, config.js is added.

### 3. Open index.html
Once You have your API key and the config.js file created, its time to launch the app by opening index.html.
Thank you and enjoy!
