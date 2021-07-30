// import './App.css';
import Try from './Try'
const axios = require('axios');

function App() {
  axios
  .get(`${ process.env.REACT_APP_WEATHER_API_URL }/forecast.json?key=${ process.env.REACT_APP_WEATHER_API_KEY }&q=98112&days=5&aqi=yes&alerts=yes`)

  .then((response) => {
  // Code that executes with a successful response goes here
  console.log('success!')
  console.log('All data is', response.data)
  console.log('The current weather is:', response.data["current"]["condition"]["text"])
  console.log("The current temp is:", response.data["current"]["temp_f"])
  console.log("The high today is:", response.data["current"], 'The low today is:', )
  console.log('The current air quality is:', response.data["current"]["air_quality"]["us-epa-index"])

  })
  .catch((error) => {
  // Code that executes with an unsuccessful response goes here
  console.log('error')
  });


  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div className="Forecast-Display">
        
        Here I am just hoping for a miracle
        <Try />


      </div>
    </div>
  );
}

export default App;
