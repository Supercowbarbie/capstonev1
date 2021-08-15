import ForecastCard from "./ForecastCard";
import { Button } from "semantic-ui-react";
import CurrentCard from "./CurrentCard";

// const axios = require('axios');
    
const WeatherSummary = (props) => {
    // map each day from forecast into each forecastCard
    // create a function that renders multiple forecast cards

    // const currentDay = () => {
    //     return (
    //         <div>
    //             <CurrentCard />
    //         </div>
    //     )
    // }

    const forecastDays = props.forecastInfo.map(day => {
        return (
            <div>
                <ForecastCard 
                dateTime={day.dateTime}></ForecastCard>
            </div>
        );
    });
    
    const newForecast = () => {
        props.setForecastDisplay(false)
    }

    return (
        <main>
            <div> 
                <CurrentCard 
                currentDay={props.currentDay}
                inputParams={props.inputParams}
                forecastInfo={props.forecastInfo}  
                />
                {/* <ForecastCard 
            currentDay={props.currentDay} 
            forecastInfo={props.forecastInfo}
            inputParams={props.inputParams} 
            /> */}
            </div>
            <div>
                { forecastDays }
            </div>
                <Button onClick={ newForecast }>
                    New Forecast
                </Button>
                
        </main>
    )
};

export default WeatherSummary;