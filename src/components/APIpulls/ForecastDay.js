import React, { useState } from 'react';
import ForecastCard from '../displayContainers/ForecastCard';
import {
    textInput,
    Radio,
    Button
} from './Forecast.css';

const axios = require('axios').default;

const ForecastDay = (props) => {
    let [responseObj, setResponseObj] = useState({});

    // let lon = {props.lon}
    // let lat = {props.lat}
    // let unit


    function getForecastDay() {
        axios
        .get(`https://api.openweathermap.org/data/2.5/onecall?lat=47.6401&lon=-122.2832&exclude=current,minutely,hourly&units=imperial&appid=${process.env.REACT_APP_OPEN_API_KEY}`)
        .then(function (response) {
            console.log(response.data);
            let currentForecast = response.data
            setResponseObj({
                name: currentForecast.name,
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

            });
        }).catch(function (error) {
            console.error(error);
        });
    
}

    return (
        <div>
            
            <ForecastCard
                responseObj={responseObj}
                />
        </div>
    )
}

export default ForecastDay;