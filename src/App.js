// import './App.css';
import React, { useState } from 'react';
import InputForm from './components/displayContainers/InputForm';
import WeatherSummary from './components/displayContainers/WeatherSummary';

const axios = require('axios').default;

const App = () => {
  // State
  let [currentObj, setCurrentObj] = useState({});
  let [forecastObj, setForecastObj] = useState({});
  let [alerts, setAlerts] = useState({});
  let [forecastDisplay, setForecastDisplay] = useState(false);
  let [inputParams, setInputParams] = useState({});


  const capitalize = (description) => {
    let capitalDescription = description.charAt(0).toUpperCase() 
    + description.slice(1)
    return `${capitalDescription}`
  };
  
  const hourConvert = (timestamp) => {
    // a function to convert UNIX timestamp to words
    let date = new Date(timestamp*1000)
    let hour = date.getHours()
    if (hour > 12) {
        hour -= 12
    }
    return `${hour}:${date.getMinutes()}`
  };

  const unitDisplay = (unit) => {
    // a function to display the correct units for temp & wind speed
  };

  const aqiDisplay = (aqi) => {
    // function to add descrription to AQI 
    if (aqi === 1) {
      return 'Air Quality is good. Great day to be active outside!'
    }
    else if (aqi === 2) {
      return 'Air quality is fair. People who are unusually sensitive to air pollution could have symptoms.'
    }
    else if (aqi === 3) {
      return 'Air quality is unhealthy for sensitve groups. OK to be active outside, take more breaks and do less intense activities.'
    }
    else if (aqi === 4) {
      return 'Air quality is poor. Consider moving longer or more intense activities indoors or rescheduling them to another day or time.  '
    }
    else if (aqi === 5) {
      return 'Air quality is very poor. Move all activities indoors or reschedule them for another day.'
    }
  };

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
      // console.log(currentAlerts)
      setAlerts({"alerts": currentAlerts});
      // console.log("alerts:", alerts)

// a loop to unpack each day from the response and store it in the futureForecastObj
      for (let i=0; i < futureForecast.length; i++) {
        futureForecastObj[i] =
        {dateTime: futureForecast[i].dt,
          sunset: hourConvert(futureForecast[i].sunset),
          minTemp: Math.round(futureForecast[i].temp.min),
          maxTemp: Math.round(futureForecast[i].temp.max),
          humidity: futureForecast[i].humidity,
          windSpeed: futureForecast[i].wind_speed,
          windDegree: futureForecast[i].wind_deg,
          description: capitalize(futureForecast[i].weather[0].description),
          icon: futureForecast[i].weather[0].icon,
        } ;
      }
      // console.log(futureForecastObj)
      return axios.get(forecastAQI);
    })
    .then((response) => {
      // console.log(response.data)
      let forecastAQIResponse = response.data.list;
      // console.log('FutureForecastObj',futureForecastObj)
      
      for (const day in futureForecastObj) { 
          const dateLabel = futureForecastObj[day].dateTime;
          // console.log(day)
          // console.log(dateLabel)
          for (let j=0; j < forecastAQIResponse.length; j++ ) {
            if (dateLabel === forecastAQIResponse[j].dt) {
              airQualityObj[dateLabel] = aqiDisplay(forecastAQIResponse[j].main.aqi);
              // console.log("test")
          }
        }
      }  
      
      setForecastObj({
          ...futureForecastObj,
          airQuality: {...airQualityObj}
      });
      // console.log('ForecastObj:', forecastObj)

      }).catch(function (error) {
        console.error(error);
    });
  }
  
  const currentDayInfo = (location, unit) => {
    // A function to gather current day weather and AQI
    let currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_OPEN_API_KEY}&units=${unit}`
  
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
          visibility: currentForecast.visibility,
          windSpeed: currentForecast.wind.speed,
          windDegree: currentForecast.wind.deg,
          sunset: hourConvert(currentForecast.sys.sunset),
          description: capitalize(currentForecast.weather[0].description),
          icon: currentForecast.weather[0].icon
      };

      let currentAQI = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${currentForecastObj.lat}&lon=${currentForecastObj.lon}&appid=${process.env.REACT_APP_OPEN_API_KEY}`
      
      return axios.get(currentAQI);
    })
    .then((response) => {
      let currentAQIResponse = response.data;
      
      setCurrentObj({
          ...currentForecastObj,
          airQuality: aqiDisplay(currentAQIResponse.list[0].main.aqi)
      });
      
      forecastDayInfo(currentForecastObj.lat, currentForecastObj.lon, unit)

    }).catch(function (error) {
        console.error(error);
    });
  };

  //ultimately this is the last thing that actually runs in the program
  const processInputData = (inputObj) => {
    // function to pass the input data along to currentDayInfo and forecastDayInfo 
    // when "Get Forecast" button is clicked in InputForm
    let location = inputObj.location
    let unit = inputObj.unit
    
    setInputParams( inputObj )
    currentDayInfo(location, unit)
    setForecastDisplay(true)

  };

  const conditionalDisplay = () => {
    if (!forecastDisplay ) {
      return ( <div>
        < InputForm 
        onClickCallback= { processInputData }
        // currentInfo={ currentObj } 
        // forecastInfo={ forecastObj } 
        /> 
      </div> )
    }
    else {
      return ( <div> 
        <WeatherSummary 
        currentInfo={ currentObj } 
        forecastInfo={ forecastObj } 
        inputParams={ inputParams }
        alerts={ alerts }
        setForecastDisplay={ setForecastDisplay }
        resetForecastObject= { setForecastObj } 
        />
    </div> )
    };
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Can I play outside?</h1>
      </header>
      <main>

      { conditionalDisplay() }
      {/* { console.log('currentObj in App', currentObj) }
      { console.log('forecastObj in App', forecastObj) } */}
        
      </main>
      <footer>
        Page created by Marisa Morales
      </footer>
    </div>
  );
}

export default App;
