// OPTIONS: 1-10 days, 
// DISPLAY: 1-10 days == user selection, 
// import { useState } from 'react';
// import axiosInstance from '../helpers/axios';
import CurrentDay from "../APIpulls/CurrentDay";
import Forecast from "../APIpulls/ForecastDay";
import ForecastCard from "./ForecastCard";

// const axios = require('axios');

const WeatherSummary = () => {
    // map each day from forecast into each forecastCard
    // create a function that renders multiple forecast cards 
    

    return (
        <div>
            
            <ForecastCard  />
            {/* <button onClick={getCurrentDay}>Get Forecast</button> */}

        </div>
        

    );

};



export default WeatherSummary;