// OPTIONS: 1-10 days, 
// DISPLAY: 1-10 days == user selection, 
// import { useState } from 'react';
// import axiosInstance from '../helpers/axios';
import CurrentDay from "../APIpulls/CurrentDay";
import Forecast from "../APIpulls/Forecast";
import ForecastCard from "./ForecastCard";

// const axios = require('axios');

const WeatherSummary = () => {
    

    return (
        <div>
            
            <ForecastCard/>

        </div>
        

    );

};



export default WeatherSummary;