import React, { useState } from 'react';
import { Container, Header, Dimmer, Loader, Grid } from "semantic-ui-react";

import InputForm from './components/displayContainers/InputForm';
import WeatherSummary from './components/displayContainers/WeatherSummary';

const axios = require('axios').default;

const App = ({ children}) => {
  // State
  let [currentObj, setCurrentObj] = useState({});
  let [forecastObj, setForecastObj] = useState({});
  let [alerts, setAlerts] = useState({});
  // let [airQuality, setAirQuality] = useState({});
  let [forecastDisplay, setForecastDisplay] = useState(false);
  let [inputParams, setInputParams] = useState({});
  
  const hourConvert = (timestamp) => {
    // a function to convert UNIX timestamp to words
    let date = new Date(timestamp*1000)
    let hour = date.getHours()
    let minute = date.getMinutes()
    if (hour > 12) {
        hour -= 12
    }
    if (minute <10){
      minute = `0${minute}`
    }
    return `${hour}:${minute}`
  };


  let forecastDayInfo = (lat, lon, unit) => {
    // a function using lon & lat from currentDayInfo to get a forecast up to 7 days in the future
    let forecastWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=${unit}&appid=${process.env.REACT_APP_OPEN_API_KEY}`

    let forecastAQI = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_API_KEY}`

    let futureForecastObj = {};
    // let airQualityObj = {};

    axios
    .get(forecastWeather)
    .then((response) => {
      let futureForecast = response.data.daily
      let currentAlerts = response.data.alerts
      setAlerts({"alerts": currentAlerts});

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
          description: futureForecast[i].weather[0].description,
          icon: futureForecast[i].weather[0].icon,
        } ;
      }
      return axios.get(forecastAQI);
    })
    .then((response) => {
      let forecastAQIResponse = response.data.list;
      
      for (const day in futureForecastObj) { 
          const dateLabel = futureForecastObj[day].dateTime;
          for (let j=0; j < forecastAQIResponse.length; j++ ) {
              if (dateLabel === forecastAQIResponse[j].dt) {
                futureForecastObj[day]['aqi'] = forecastAQIResponse[j].main.aqi;
          }
        }
      }  
      
      setForecastObj({...futureForecastObj,})
      // setAirQuality({ ...airQualityObj })

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
        /> 
      </div> )
    }
    else {
      return ( (typeof forecastObj['0'] != 'undefined' ) ? (
        <WeatherSummary 
        currentInfo={ currentObj } 
        forecastInfo={ forecastObj } 
        inputParams={ inputParams }
        alerts={ alerts }
        setForecastDisplay={ setForecastDisplay }
        resetForecastObject= { setForecastObj }
        />
        ):(
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
        </div>
          )
      )
    };
  };
  
  return (
    <div>
    <Container style={{ margin: 20 }}>
        <Header textAlign='center' as="h1" color='teal'> 
        Can I play outside? 
        </Header>
        <main>
            <div>
            { conditionalDisplay() }
            </div>
        </main>
        <Grid>
            <Grid.Column textAlign="center">
              App created by Marisa Morales
            </Grid.Column>
        </Grid>
    </Container>
    </div>
  );
}

export default App;

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
