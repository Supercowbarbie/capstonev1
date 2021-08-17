import { Button, Card, Divider } from "semantic-ui-react";
import CurrentCard from "./CurrentCard";
import ForecastCard from "./ForecastCard";
import Alerts from "./Alerts";
    
const WeatherSummary = (props) => {
    // console.log(props.alerts)
    // console.log(props.forecastInfo)
    // map each day from forecast into each forecastCard
    // create a function that renders multiple forecast cards

    let forecastDays = [];
    const forecast = {...props.forecastInfo}
    delete forecast['0'];
    console.log(forecast)
    Object.keys(forecast).forEach(day => {
        forecastDays.push(
            <div>
                    <ForecastCard 
                        forecastInfo={ props.forecastInfo[day] } 
                        inputParams={ props.inputParams } 
                        AQIForecast= { props.AQIForecast }
                />
            </div>
            )
        })
    

    const newForecast = () => {
        // props.resetForecastObject({})
        props.setForecastDisplay(false)
        
    };

    // const alertDisplay = () => {
    //     if (props.alerts) { 
    //         for (let alert in props.alerts)
    //         return < Alerts
    //         alerts= { props.alerts[alert] } 
    //         />
    //     }  
    // };
    const alertDisplay = () => {
        const alertList = props.alerts.map(alert => {
            return ( <div>
                < Alerts
                alerts= { props.alerts } 
                />
                </div>
            );
        });
        return (
            alertList
        )
    }

    return (
        <main>
            <Card.Group centered>
                { alertDisplay }

                <CurrentCard 
                currentInfo={ props.currentInfo } 
                forecastInfo={ props.forecastInfo } 
                inputParams={ props.inputParams }  
                />
            </Card.Group>
            
            <Card.Group centered itemsPerRow={3}>

                { forecastDays }
                
            </Card.Group>
            
            <br/>
            <div>
                <Button onClick={ newForecast }>
                    New Forecast
                </Button>
            </div>
        </main>
    )
};

export default WeatherSummary;