// import './App.css';
import React, { useState } from 'react';
import FormTrials from './components/FormTrails';

const axios = require('axios').default;

const App = () => {
  // State
  let [currentObj, setCurrentObj] = useState({});
  let [forecastObj, setForecastObj] = useState({});
  let [location, setLocation] = useState('');
  let [unit, setUnit] = useState('imperial');

  const processInputData = (inputObj) => {
    // function to pass the input data along to currentDayInfo and forecastDayInfo when "Get Forecast" button is clicked in InputForm
  }
  
  const convertWindDirection = () => {
    // function that converts wind degrees to direction
  
  }
  
  const currentDayInfo = (location) => {
    // A function to gather current day weather and AQI
    let currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=98112&appid=${process.env.REACT_APP_OPEN_API_KEY}&cnt=6&units=imperial`
  
    let currentAQI = `https://api.openweathermap.org/data/2.5/air_pollution?lat=47.6401&lon=-122.2832&appid=${process.env.REACT_APP_OPEN_API_KEY}`
  
    let currentForecastObj;
  
    axios
    .get(currentWeather)
    .then((response) => {
        let currentForecast = response.data
  
        currentForecastObj = {
            locationName: currentForecast.name,
            lon: currentForecast.coord.lon,
            lat: currentForecast.coord.lat,
            dateTime: currentForecast.dt,
            currentTemp: Math.round(currentForecast.main.temp),
            feelsLike: Math.round(currentForecast.main.feels_like),
            humidity: currentForecast.main.humidity,
            // convert visibility to km or say meters
            visibility: currentForecast.visibility,
            windSpeed: currentForecast.wind.speed,
            // needs to be translated into direction
            windDegree: currentForecast.wind.deg,
            sunset: currentForecast.sys.sunset,
            description: currentForecast.weather[0].description,
            icon: currentForecast.weather[0].icon
        };
        return axios.get(currentAQI);
    })
    .then((response) => {
        console.log(response.data)
        let currentAQIResponse = response.data;
        setCurrentObj({
            ...currentForecastObj,
            airQuality: currentAQIResponse.list[0].main.aqi
        });
        //this promise is just missing a return statement
        console.log(currentAQIResponse)
        return currentObj;
    }).catch(function (error) {
        console.error(error);
    });
  }
  
  const forecastDayInfo = ({currentObj}) => {
    // a function using lon & lat from currentDayInfo to get a forecast up to 7 days in the future
    let lat = currentObj.lat
    let lon = currentObj.lon

    let forecastWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=imperial&appid=${process.env.REACT_APP_OPEN_API_KEY}`

    let forecastAQI = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_API_KEY}`

    let futureForecastObj;

    axios
    .get(forecastWeather)
    .then((response) => {
        let futureForecast = response.data.daily
        let currentAlerts = response.data.alerts

  // create a loop to unpack each day into the obj
        let futureForecastObj = {};

        for (let i=0; i < futureForecast.length; i++) {
          futureForecastObj[i] =
          {dateTime: futureForecast[i].dt,
            sunset: futureForecast[i].sunset,
            minTemp: futureForecast[i].temp.min,
            maxTemp: futureForecast[i].temp.max,
            humidity: futureForecast[i].humidity,
            windSpeed: futureForecast[i].wind_speed,
            windDegree: futureForecast[i].wind_deg,
            description: futureForecast[i].weather.description,
            icon: futureForecast[i].weather.icon,
          } ;
        }
        futureForecastObj['alerts'] = currentAlerts;
  
        return axios.get(forecastAQI);
    })
    .then((response) => {
        console.log(response.data)
        let forecastAQIResponse = response.data.list;
        // another loop for day in futureForecastObj for object in forecastAQIResponse if object.dt === day.dateTime tempList.append
        setCurrentObj({
            forecast: {...futureForecastObj},
            airQuality: forecastAQIResponse.list[0].main.aqi
        });
        console.log(forecastAQIResponse)
        return forecastObj;
    }).catch(function (error) {
        console.error(error);
    });
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Can I play outside?</h1>
      </header>
      <main>
      {/* <label>
        Location <input type="text" value={locationSearch}
          onChange={e => setLocationSearch(e.target.value)}/>
      </label> */}
      
        {/* <WeatherSummary /> */}
        < FormTrials />
        {/* < InputForm onClickCallback= { processInputData }/>  */}
        {/* <ForecastCard /> */}
        
      </main>
      <footer>
        Page created by Marisa Morales
      </footer>
    </div>
  );
}

export default App;
