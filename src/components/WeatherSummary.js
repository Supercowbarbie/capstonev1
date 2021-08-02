// OPTIONS: 1-10 days, 
// DISPLAY: 1-10 days == user selection, 
// import { useState } from 'react';
import axiosInstance from '../helpers/axios';

const axios = require('axios');

const WeatherSummary = () => {
    axios
    .get(`${ axiosInstance.baseURL }/forecast.json?key=${ axiosInstance.key }&q=${ axiosInstance.q }&days=${ axiosInstance.days }&aqi=yes&alerts=yes`)

    .then((response) => {
    // Code that executes with a successful response goes here
    // console.log('success!')
    console.log('The current air quality is:', response.data["current"]["air_qiality"]["us-epa-index"])
    console.log('The current weather is:', response.data["current"]["condition"]["text"])
    console.log('The current weather is:', response.data["current"])

    })
    .catch((error) => {
    // Code that executes with an unsuccessful response goes here
    // console.log('error')
    });

    return (
        "I'm trying here"

    );

};



export default WeatherSummary;