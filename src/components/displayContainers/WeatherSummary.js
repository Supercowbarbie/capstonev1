import { Button, Card, Divider } from "semantic-ui-react";
import CurrentCard from "./CurrentCard";
import ForecastCard from "./ForecastCard";
import Alerts from "./Alerts";
    
const WeatherSummary = (props) => {
    console.log(props.forecastInfo)
    // map each day from forecast into each forecastCard
    // create a function that renders multiple forecast cards

    // const currentDay = () => {
    //     return (
    //         <div>
    //             <CurrentCard />
    //         </div>
    //     )
    // }

    // const forecastDays = () => {
    //     return (
    //         <div>
    //             <ForecastCard 
    //             dateTime={day.dateTime}></ForecastCard>
    //         </div>
    //     );
    // });
    // const buildForecastDays = () => {
    let forecastDays = [];
    for ( let day in props.forecastInfo ) {
        forecastDays = [
        <div>
            <ForecastCard 
                forecastInfo={ day } 
                inputParams={ props.inputParams } 
        />
        </div> ];
    }

    
    const newForecast = () => {
        // props.resetForecastObject({})
        props.setForecastDisplay(false)
        
    };

    const alertDisplay = () => {
        if (props.alerts) { 
            for (let alert in props.alerts)
            return < Alerts
            alerts= { alert } 
            />
        }  
    };

    return (
        <main>
            {/* <Card.Group> */}
                <CurrentCard 
                currentInfo={ props.currentInfo } 
                forecastInfo={ props.forecastInfo } 
                inputParams={ props.inputParams }  
                />
                {/* <ForecastCard 
                currentInfo={ props.currentInfo } 
                forecastInfo={ props.forecastInfo } 
                inputParams={ props.inputParams } 
                /> */}
                { forecastDays }
                { alertDisplay }
                
            {/* </Card.Group> */}
            <div>
                <Button onClick={ newForecast }>
                    New Forecast
                </Button>
            </div>
        </main>
    )
};

export default WeatherSummary;