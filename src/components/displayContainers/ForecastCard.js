import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ForecastCard = (props) => {
    let airQuality = props.AQIForecast 
    let forecast = props.forecastInfo
    let inputParams = props.inputParams

    const dateDisplay = (timestamp) => {
        // a function to convert UNIX timestamp to words
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday"]
        const months = ["January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"]
        
        let date = new Date(timestamp*1000)

        let formattedDate = {
            weekDay: days[date.getDay()],
            month: months[date.getMonth()],
            numberDay: date.getDate()
        }
        return (
            `Forecast for ${ formattedDate.weekDay }, 
            ${ formattedDate.month }  
            ${ formattedDate.numberDay }`
        )
    };

    const toggleHumidity = () => {
        if (inputParams.humidity) {
            return ( <div> 
                {`Humidity: ${ forecast.humidity}%`}
                </div> 
            )
        } 
    };

    const toggleSunset = () => {
        if (inputParams.sunset) {
            return `Sunset at: ${ forecast.sunset } PM`
        } 
        
    };
    const convertWindDirection = (windDegree, windSpeed) => {
        // function that convertsyarn start wind degrees to direction
        if ( windDegree >= 0 && windDegree < 22.5) {
            return `Wind: N ${windSpeed}`
        } 
        else if ( windDegree >= 22.5 && windDegree < 45) {
            return `Wind: NNE ${windSpeed}`
        } 
        else if ( windDegree >= 45 && windDegree < 67.5) {
            return `Wind: NE ${windSpeed}`
        } 
        else if ( windDegree >= 67.5 && windDegree < 90) {
            return `Wind: ENE ${windSpeed}`
        } 
        else if ( windDegree >= 90 && windDegree < 112.5) {
            return `Wind: E ${windSpeed}`
        } 
        else if ( windDegree >= 112.5 && windDegree < 135) {
                return `Wind: ESE ${windSpeed}`
            } 
        else if ( windDegree >= 135 && windDegree < 157.5) {
            return `Wind: SE ${windSpeed}`
        } 
        else if ( windDegree >= 157.5 && windDegree < 180) {
            return `Wind: SSE ${windSpeed}`
        } 
        else if ( windDegree >= 180 && windDegree < 202.5) {
            return `Wind: S ${windSpeed}`
        } 
        else if ( windDegree >= 202.5 && windDegree < 225) {
            return `Wind: SSW ${windSpeed}`
        } 
        else if ( windDegree >= 225 && windDegree < 247.5) {
            return `Wind: SW ${windSpeed}` 
        } 
        else if ( windDegree >= 247.5 && windDegree < 270) {
            return `Wind: WSW ${windSpeed}`
        } 
        else if ( windDegree >= 270 && windDegree < 292.5) {
            return `Wind: W ${windSpeed}`
        } 
        else if ( windDegree >= 292.5 && windDegree < 315) {
            return `Wind: WNW ${windSpeed}`
        } 
        else if ( windDegree >= 315 && windDegree < 337.5) {
            return `Wind: NW ${windSpeed}`
        } 
        else if ( windDegree >= 337.5 && windDegree < 360) {
            return `Wind: NNW ${windSpeed}`
        } 
        else {
            return `Wind: N ${windSpeed}`
        }
    };
    const airQualityDisplay = () => {
        for (let day in airQuality) {
            if (day === forecast.dateTime) {
                return ( <div> 
                    `Air Quality Index (AQI): ${ airQuality.day }`
                    </div>
                )
            }
        }
    };

    return (
        <Card.Content>
            <Card.Header textAlign='center'>Today is a ____ day for your activity </Card.Header>
            <Image
            floated='center'
            alt={ forecast.description }
            src= {`http://openweathermap.org/img/wn/${forecast.icon}.png`}
            label={dateDisplay(forecast.dateTime)}
            />
            <Card.Meta>{ forecast.description }</Card.Meta>
            <Card.Description>
                <div>
                Max temp: {forecast.maxTemp}° 
                <br></br>
                Min temp: {forecast.minTemp}°
                </div>
                { convertWindDirection(forecast.windDegree, forecast.windSpeed) }
                { airQualityDisplay }
                { toggleHumidity(forecast.humidity)} 
                { toggleSunset(forecast.sunset)} 
            </Card.Description>
        </Card.Content>    
    )
};


export default ForecastCard;