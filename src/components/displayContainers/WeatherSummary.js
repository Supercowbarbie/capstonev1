import { Button, Card, Header, Grid } from "semantic-ui-react";
import CurrentCard from "./CurrentCard";
import ForecastCard from "./ForecastCard";
import Alerts from "./Alerts";
    
const WeatherSummary = (props) => {
    // console.log(props)

    let forecastDays = [];
    const forecast = {...props.forecastInfo}
    delete forecast['0'];
    Object.keys(forecast).forEach(day => {
        forecastDays.push(
                <Card color='violet'>
                    <ForecastCard 
                    forecastInfo={ props.forecastInfo[day] } 
                    inputParams={ props.inputParams } 
                    // AQIForecast= { props.AQIForecast }
                    />
                </Card>
            )
        })
    
    const newForecast = () => {
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
            <Header textAlign='center' as="h2" color='grey'>
                Best activity days for {props.inputParams.location}
            </Header>
            <Card.Group centered >
                { alertDisplay }

                <CurrentCard 
                currentInfo={ props.currentInfo } 
                forecastInfo={ props.forecastInfo } 
                inputParams={ props.inputParams }  
                />
            </Card.Group>
            
            <Card.Group centered >

                { forecastDays }
                
            </Card.Group>
            <Grid>
                <Grid.Column textAlign="center">
                    <Button centered onClick={ newForecast } class="big ui button">
                        New Forecast
                    </Button>
                </Grid.Column>
            </Grid>
        </main>
    )
};

export default WeatherSummary;