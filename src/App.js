// import './App.css';
import React, { useState } from 'react';
import InputForm from './components/displayContainers/InputForm';
import WeatherSummary from './components/displayContainers/WeatherSummary';

const axios = require('axios').default;

const App = () => {
  // State
  let [currentObj, setCurrentObj] = useState({});
  let [forecastObj, setForecastObj] = useState({});
  let [forecastDisplay, setForecastDisplay] = useState(false);

  let forecastDayInfo = (lat, lon, unit) => {
    // a function using lon & lat from currentDayInfo to get a forecast up to 7 days in the future
    let forecastWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=${unit}&appid=${process.env.REACT_APP_OPEN_API_KEY}`

    let forecastAQI = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_API_KEY}`

    let futureForecastObj = {};
    let airQualityObj = {};

    axios
    .get(forecastWeather)
    .then((response) => {
      let futureForecast = response.data.daily
      // console.log("Daily Response Info:", response.data.daily)
      let currentAlerts = response.data.alerts

// a loop to unpack each day into the obj
      // let futureForecastObj = {};
      for (let i=0; i < futureForecast.length; i++) {
        futureForecastObj[i] =
        {dateTime: futureForecast[i].dt,
          sunset: futureForecast[i].sunset,
          minTemp: futureForecast[i].temp.min,
          maxTemp: futureForecast[i].temp.max,
          humidity: futureForecast[i].humidity,
          windSpeed: futureForecast[i].wind_speed,
          windDegree: futureForecast[i].wind_deg,
          description: futureForecast[i].weather[0].description,
          icon: futureForecast[i].weather[0].icon,
        } ;
      }
      futureForecastObj['alerts'] = currentAlerts;

      return axios.get(forecastAQI);
    })
    .then((response) => {
      // console.log(response.data)
      let forecastAQIResponse = response.data.list;
      
      for (let day in futureForecastObj) { 
        let dateLabel = futureForecastObj[day].dateTime;
        for (let j=0; j < forecastAQIResponse.length; j++ ) {
          if (dateLabel === forecastAQIResponse[j].dt) {
            airQualityObj[dateLabel] = forecastAQIResponse[j].main.aqi;
          }
        }
      }  
      setForecastObj({
          ...futureForecastObj,
          airQuality: {...airQualityObj}
      });
      }).catch(function (error) {
        console.error(error);
    });
  }
  
  const currentDayInfo = (location, unit) => {
    // A function to gather current day weather and AQI
    let currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_OPEN_API_KEY}&cnt=6&units=${unit}`
  
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

      let currentAQI = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${currentForecastObj.lat}&lon=${currentForecastObj.lon}&appid=${process.env.REACT_APP_OPEN_API_KEY}`
      
      return axios.get(currentAQI);
    })
    .then((response) => {
      let currentAQIResponse = response.data;
      
      setCurrentObj({
          ...currentForecastObj,
          airQuality: currentAQIResponse.list[0].main.aqi
      });
      console.log(currentObj)
      forecastDayInfo(currentForecastObj.lat, currentForecastObj.lon, unit)
      console.log(forecastObj)

    }).catch(function (error) {
        console.error(error);
    });
  }

  //ultimately this is the last thing that actually runs in the program
  const processInputData = (inputObj) => {
    // function to pass the input data along to currentDayInfo and forecastDayInfo when "Get Forecast" button is clicked in InputForm
    let location = inputObj.location
    let unit = inputObj.unit

    currentDayInfo(location, unit)

    setForecastDisplay(true)
  };

  const conditionalDisplay = () => {
    if (!forecastDisplay) {
      
      return (<div>
        < InputForm 
        onClickCallback= { processInputData }
        currentDay={currentObj} 
        forecastInfo={forecastObj}
        /> 
      </div> )
    }
    else {
      return ( <div> 
        <WeatherSummary 
      currentinfo={currentObj} 
      forecastInfo={forecastObj} 
      setForecastDisplay={ setForecastDisplay }
      />
    </div> )
  };

  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Can I play outside?</h1>
      </header>
      <main>

      { conditionalDisplay() }
        
        
      </main>
      <footer>
        Page created by Marisa Morales
      </footer>
    </div>
  );
}

export default App;
