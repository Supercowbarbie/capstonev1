// Export an object that contains: 
// current: .condition.text:weather condition, .temp_f:temp, 
// wind_mph:wind speed, wind_dir:direction, air_quality.us-epa-index:airquality, 
// feelslike_f:feels like, vis_miles:visibility, uv:uv index, humidity:humidity
// forecast.forecastday.day: .maxtemp_f:max, .mintemp_f:min temp, .maxwind_mph:max
// .daily_chance_of_rain:chance of rain, .daily_chance_of_snow:chance of snow,
// forecast.forecastday.astro.sunset: sunset time
import ForecastCard from "../displayContainers/ForecastCard";
import React, { useState } from "react";

const axios = require('axios').default;

const CurrentDay = () => {
    let [responseObj, setResponseObj] = useState({});

    function getCurrentDay() {
        // const options = {
        //     // method: 'GET',
        //     url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        //     params: {
        //     q: '98112',
        //     cnt: '6',
        //     units: 'imperial',
        //     appid: '0a163add85e60a0531c030e8d65a53b7'
        //     }
        // };
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=98112&appid=${process.env.REACT_APP_OPEN_API_KEY}&cnt=6&units=imperial`)
        .then(function (response) {
            console.log(response.data);
            let currentForecast = response.data
            setResponseObj({
                lon: response.data.coord.lon,
                lat: response.data.coord.lat,
                currentTemp: response.data.main.temp,
                humidity: response.data.main.humidity,
                visibility: response.data.visibility,
                windSpeed: response.data.wind.speed,
                // needs to be translated into direction
                windDegree: response.data.wind.deg,
            });
        }).catch(function (error) {
            console.error(error);
        });
    
    let convertDateTime = () => {
        // function that converts UNIX Time Stamp to regular date and time
    }
        
    }

    return (
        <div>
        <h2>Today's Weather</h2>
        <div>
            {JSON.stringify(responseObj)}
        </div>
        <button onClick={getCurrentDay}>Get Forecast</button>
        <ForecastCard
                responseObj={responseObj}
                />
    </div>
    )

} 

export default CurrentDay;