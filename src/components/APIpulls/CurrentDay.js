// Export an object that contains: 
// current: .condition.text:weather condition, .temp_f:temp, 
// wind_mph:wind speed, wind_dir:direction, air_quality.us-epa-index:airquality, 
// feelslike_f:feels like, vis_miles:visibility, uv:uv index, humidity:humidity
// forecast.forecastday.day: .maxtemp_f:max, .mintemp_f:min temp, .maxwind_mph:max
// .daily_chance_of_rain:chance of rain, .daily_chance_of_snow:chance of snow,
// forecast.forecastday.astro.sunset: sunset time
import axios from "axios";
import React, { useState } from "react";

const CurrentDay = () => {
    let [responseObj, setResponseObj] = useState({});

    function getCurrentDay() {
        const options = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/weather',
            params: {
            q: '98112',
            lat: '0',
            lon: '0',
            callback: 'test',
            id: '2172797',
            lang: 'null',
            units: '"metric" or "imperial"',
            mode: 'xml, html'
            },
            headers: {
                'x-rapidapi-key': 'c24d5179abmsh7b32c7ab02c3f79p12c352jsn6cbfe06ce018',
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
            }
        };
        axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            setResponseObj(response);
        }).catch(function (error) {
            console.error(error);
        });
    }
    return (
        <div>
        <h2>Today's Weather</h2>
        <div>
            {JSON.stringify(responseObj)}
        </div>
        <button onClick={getCurrentDay}>Get Forecast</button>
    </div>
    )

} 

export default CurrentDay;