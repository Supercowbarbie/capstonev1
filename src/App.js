// import './App.css';
import React, { useState } from 'react';
import CurrentDay from './components/APIpulls/CurrentDay';
import Forecast from './components/APIpulls/ForecastDay';
import ForecastCard from './components/displayContainers/ForecastCard';
import InputForm from './components/displayContainers/InputForm';
import WeatherSummary from './components/displayContainers/WeatherSummary';
// const axios = require('axios');


const App = () => {

  const convertDateTime = () => {
    // function that converts UNIX Time Stamp to regular date and time
  }

  const converstWindDirection = () => {
    // function that converst wind degrees to direction

  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Can I play outside?</h1>
      </header>
      <main>
      {/* <label>
        Location <input type="text" value={locationSearch}
          onChange={e => setLocationSearch(e.target.value)}/>
      </label> */}
      
        {/* <WeatherSummary /> */}
        {/* < CurrentDay /> */}
        < InputForm /> 
        {/* <ForecastCard /> */}
        
      </main>
      <footer>
        Page created by Marisa Morales
      </footer>
    </div>
  );
}

export default App;
