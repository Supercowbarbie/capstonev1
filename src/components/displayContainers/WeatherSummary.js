import { Button, Card, Divider } from "semantic-ui-react";
import CurrentCard from "./CurrentCard";
import ForecastCard from "./ForecastCard";
import Alerts from "./Alerts";
    
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

    // const forecastDays = props.forecastInfo.map(day => {
    //     return (
    //         <div>
    //             <ForecastCard 
    //             dateTime={day.dateTime}></ForecastCard>
    //         </div>
    //     );
    // });
    
    const newForecast = () => {
        props.setForecastDisplay(false)
    }

    return (
        <main>
            <Card.Group>
                <CurrentCard 
                currentInfo={ props.currentInfo } 
                forecastInfo={ props.forecastInfo } 
                inputParams={ props.inputParams }  
                />
                <ForecastCard 
                currentInfo={ props.currentInfo } 
                forecastInfo={ props.forecastInfo } 
                inputParams={ props.inputParams } 
                />
                < Alerts
                alerts= { props.forecastInfo.alerts } />
            </Card.Group>
            <div>
                <Button onClick={ newForecast }>
                    New Forecast
                </Button>
            </div>
        </main>
    )
};

export default WeatherSummary;