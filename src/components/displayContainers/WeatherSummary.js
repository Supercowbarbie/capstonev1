// OPTIONS: 1-10 days, 
// DISPLAY: 1-10 days == user selection, 
// import { useState } from 'react';
// import axiosInstance from '../helpers/axios';
import ForecastCard from "./ForecastCard";

// const axios = require('axios');

const WeatherSummary = (props) => {
    // map each day from forecast into each forecastCard
    // create a function that renders multiple forecast cards 
    

    return (
        <div>
            
            <ForecastCard 
            currentDay={props.currentDay} 
            forecastInfo={props.forecastInfo}
            inputParams={ props.inputParams} />

        </div>
        

    );

};



export default WeatherSummary;