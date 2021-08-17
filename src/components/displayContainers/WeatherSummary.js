import { Button, Card, Divider } from "semantic-ui-react";
import CurrentCard from "./CurrentCard";
import ForecastCard from "./ForecastCard";
import Alerts from "./Alerts";
    
const WeatherSummary = (props) => {
    console.log(props.AQIForecast)
    console.log(props.forecastInfo)
    // map each day from forecast into each forecastCard
    // create a function that renders multiple forecast cards
    
    // const buildForecastDays = () => {
        // for ( const day in props.forecastInfo ) {
            // console.log(props.forecastInfo[day])
            // for (let i=1; 1 <= 7; i++ ) {
                //         forecastDays += [
                    //         <div>
                    //             <ForecastCard 
                    //                 forecastInfo={ props.forecastInfo[day] } 
                    //                 inputParams={ props.inputParams } 
                    //                 AQIForecast= { props.AQIForecast }
                    //             />
                    //         </div>
                    //     ]
                    // }
                    
                    //     console.log(forecastDays)
                    //     return forecastDays
                    // return (
                        //             <div>
                        //                 <ForecastCard 
                        //                     forecastInfo={ props.forecastInfo[day] } 
                        //                     inputParams={ props.inputParams } 
                        //                     AQIForecast= { props.AQIForecast }
                        //                 />
                        //             </div>
                        // )
                        
                        
                        //     }
                        // }
                        
                        // };
    let forecastDays = [];
    const forecast = props.forecastInfo
    Object.keys(forecast).forEach(day=> {
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
    
    // const forecastDays = props.forecastInfo.map( day => {
    //     return (
    //         <div>
    //             <ForecastCard 
    //             forecastInfo={ props.forecastInfo[day] } 
    //             inputParams={ props.inputParams } 
    //             AQIForecast= { props.AQIForecast }
    //             />
    //         </div>
    //         )
    //     }
    // )
    

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
            <Card.Group centered>
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
                
            </Card.Group>
            
            { alertDisplay }
            <div>
                <Button onClick={ newForecast }>
                    New Forecast
                </Button>
            </div>
        </main>
    )
};

export default WeatherSummary;