import React, { useState } from 'react';
import CurrentDay from '../APIpulls/CurrentDay';
import Forecast from '../APIpulls/ForecastDay';
// import Forecast.css from '../APIpulls/Forecast';
// import {
//     textInput,
//     Radio,
//     Button
// } from '../APIpulls/Forecast' 
import PropTypes from 'prop-types';

const InputForm = () => {
    // 
    let [location, setLocation] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    const getLocation = (e) => {
        e.preventDefault();

        if (location.length === 0) {
            return setError(true);
        }

        // Clear state in preparation for new data
        setError(false);    
        setLoading(true);

    }

    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            {/* Add conditions to filter here */}
            {/* how do I have all the API calls work with this click? */}
            <form onSubmit={getLocation}>
            {/* <form onSubmit={ () props.onClickCallback()}> */}
                <input
                    type="text"
                    placeholder="Enter Location"
                    maxLength="50"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    />
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label >
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                
                <button 
                type="submit"
                >
                    Get Forecast
                </button>
            </form>
            
            < CurrentDay 
            location= {location} 
            unit= {unit} 
            />
        </div>
    )
}

export default InputForm;