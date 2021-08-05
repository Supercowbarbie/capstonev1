// import './App.css';
import CurrentDay from './components/APIpulls/CurrentDay';
import ForecastCard from './components/displayContainers/ForecastCard';
import WeatherSummary from './components/displayContainers/WeatherSummary';
// const axios = require('axios');



function App() {
  // State
  // const [locationSearch, setLocationSearch] = useState('');

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
        < CurrentDay />
        
      </main>
      <footer>
        Page created by Marisa Morales
      </footer>
    </div>
  );
}

export default App;
