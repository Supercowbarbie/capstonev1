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

    // const forecastDays = props.forecastInfo.map(day => {
    //     return (
    //         <div>
    //             <ForecastCard 
    //             dateTime={day.dateTime}></ForecastCard>
    //         </div>
    //     );
    // });
    const forecastDays = () => {
        for ( const day in props.forecastInfo ) {
            return <ForecastCard 
            forecastInfo={ props.forecastInfo[day] } 
            inputParams={ props.inputParams } 
            />
        }
    }
    
    const newForecast = () => {
        // props.resetForecastObject({})
        props.setForecastDisplay(false)
        
    };

    const alertDisplay = () => {
        if (props.forecastInfo.alerts) { 
            return < Alerts
            alerts= { props.forecastInfo.alerts } 
            />
        }  
    };

    return (
        <main>
            <Card.Group>
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