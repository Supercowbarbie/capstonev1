// Export an object that contains: 
// current: .condition.text:weather condition, .temp_f:temp, 
// wind_mph:wind speed, wind_dir:direction, air_quality.us-epa-index:airquality, 
// feelslike_f:feels like, vis_miles:visibility, uv:uv index, humidity:humidity
// forecast.forecastday.day: .maxtemp_f:max, .mintemp_f:min temp, .maxwind_mph:max
// .daily_chance_of_rain:chance of rain, .daily_chance_of_snow:chance of snow,
// forecast.forecastday.astro.sunset: sunset time
import React, { useState } from "react";
import InputForm from "../displayContainers/InputForm";
import ForecastCard from "../displayContainers/ForecastCard";
import ForecastDay from "./ForecastDay";

const axios = require('axios').default;


const CurrentDay = ( {location, unit} ) => {
    let [currentObj, setCurrentObj] = useState({});
    // let location = '98112';
    // let unit = 'imperial';
    // let location = {props.location};
    // let unit = {props.unit};

    const getCurrentDay = (location, unit) => {
        let currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_OPEN_API_KEY}&cnt=6&units=${unit}`

        let currentAPI = `https://api.openweathermap.org/data/2.5/air_pollution?lat=47.6401&lon=-122.2832&appid=${process.env.REACT_APP_OPEN_API_KEY}`

        axios
        .get(currentWeather)
        .then((response) => {
            let currentForecast = response.data
            let currentForecastObj = {
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
            };
            return currentForecastObj axios.get(currentAPI);
        })
        .then((response) => {
            console.log(response.data)
            let currentAPI = response.data;
            setCurrentObj({
                ...currentForecastObj,
                aqi: response.data.list[0].main.aqi
            });
        }).catch(function (error) {
            console.error(error);
        });
    }
    
    return (
        <div>
        <h2>Today's Weather</h2>
        <div>
            {JSON.stringify(currentObj)}
        </div>
        {/* <button onClick={getCurrentDay}>Get Forecast</button> */}

        <ForecastCard
            responseObj={currentObj}
        />
        <ForecastDay
            responseObj={currentObj}
        />
    </div>
    )

} 

export default CurrentDay;