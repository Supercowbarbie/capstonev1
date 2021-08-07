// import './App.css';
import React, { useState } from 'react';
import ForecastCard from './components/displayContainers/ForecastCard';
import InputForm from './components/displayContainers/InputForm';
import WeatherSummary from './components/displayContainers/WeatherSummary';

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

  // create a loop to unpack each day into the obj
  // for i in range(len(futureForecast)) futureForecastObj ={dayi+1: {}}
        futureForecastObj = {
          Day1: {
            dateTime: futureForecast[0].dt,
            sunset: futureForecast[0].sunset,
            minTemp: futureForecast[0].temp.min,
            maxTemp: futureForecast[0].temp.max,
            humidity: futureForecast[0].humidity,
            windSpeed: futureForecast[0].wind_speed,
            windDegree: futureForecast[0].wind_deg,
            description: futureForecast[0].weather.description,
            icon: futureForecast[0].weather.icon, 
          },
          Day2: {},
          Day3: {},
          Day4: {},
          Day5: {}

            
        };
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
        < InputForm onClickCallback= { processInputData }/> 
        {/* <ForecastCard /> */}
        
      </main>
      <footer>
        Page created by Marisa Morales
      </footer>
    </div>
  );
}

export default App;
