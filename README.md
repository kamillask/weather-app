
# Weather App

A dynamic weather application that displays real time conditions, hourly forecasts, and weekly forecasts using data from the Visual Crossing Weather API. The UI updates automatically based on location, temperature units, and weather conditions.


## Features

- Search any location (city, ZIP code, or coordinates)
- Toggle °F / °C instantly
- Dynamic backgrounds & icons based on weather conditions
- 24-hour hourly forecast
- 7-day weekly forecast
- Clean modular architecture using ES Modules and dynamic imports

## Architecture
- APIHandler → Fetches weather data
- LocationHandler → Stores data, converts units, formats dates
- UIHandler → Builds UI elements, applies backgrounds, adds icons
- DOMHandler → Handles events, updates UI after searches or toggles
- 
## Tech Stack
- JavaScript (ES6+)
- Visual Crossing Weather API
- CSS
- HTML
- Dynamic imports for images/icons
- 
## Run Locally

Clone the project

```bash
  git clone https://github.com/kamillask/weather-app
```

Go to the project directory

```bash
  cd weather-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Screenshots
![Default Page](https://github.com/kamillask/weather-app/blob/main/weatherdefault.png)
![Search Page](https://github.com/kamillask/weather-app/blob/main/weathersearch.png)


