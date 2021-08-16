import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CurrentCard = (props) => {
    let inputParams = props.inputParams
    let currentInfo = props.currentInfo
    let currentForecast = props.forecastInfo['0']
    // console.log('forecast for today', currentForecast)
    console.log(props)

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
        return `Current weather for ${ formattedDate.weekDay }, 
        ${ formattedDate.month }  
        ${ formattedDate.numberDay }`
    };

    const toggleVisibility = () => {
        // toggles visibiility, humidity and Sunset on/off depending on input
        if (inputParams.visibility) {
            return `Visibility: ${ currentInfo.visibility} meters`
        }
    };

    const toggleHumidity = () => {
        if (inputParams.humidity) {
            return `Humidity: ${ currentInfo.humidity}%`
        } 
    };

    const toggleSunset = () => {
        if (inputParams.sunset) {
            return `Sunset at: ${ currentInfo.sunset } PM`
        } 
        
    };


    const convertWindDirection = (windDegree, windSpeed) => {
        // function that converts wind degrees to direction
        if ( windDegree >= 0 && windDegree < 22.5) {
            return `Current Wind Conditions (direction & speed): N ${windSpeed}`
        } 
        else if ( windDegree >= 22.5 && windDegree < 45) {
            return `Current Wind Conditions (direction & speed): NNE ${windSpeed}`
        } 
        else if ( windDegree >= 45 && windDegree < 67.5) {
            return `Current Wind Conditions (direction & speed): NE ${windSpeed}`
        } 
        else if ( windDegree >= 67.5 && windDegree < 90) {
            return `Current Wind Conditions (direction & speed): ENE ${windSpeed}`
        } 
        else if ( windDegree >= 90 && windDegree < 112.5) {
            return `Current Wind Conditions (direction & speed): E ${windSpeed}`
        } 
        else if ( windDegree >= 112.5 && windDegree < 135) {
                return `Current Wind Conditions (direction & speed): ESE ${windSpeed}`
            } 
        else if ( windDegree >= 135 && windDegree < 157.5) {
            return `Current Wind Conditions (direction & speed): SE ${windSpeed}`
        } 
        else if ( windDegree >= 157.5 && windDegree < 180) {
            return `Current Wind Conditions (direction & speed): SSE ${windSpeed}`
        } 
        else if ( windDegree >= 180 && windDegree < 202.5) {
            return `Current Wind Conditions (direction & speed): S ${windSpeed}`
        } 
        else if ( windDegree >= 202.5 && windDegree < 225) {
            return `Current Wind Conditions (direction & speed): SSW ${windSpeed}`
        } 
        else if ( windDegree >= 225 && windDegree < 247.5) {
            return `Current Wind Conditions (direction & speed): SW ${windSpeed}` 
        } 
        else if ( windDegree >= 247.5 && windDegree < 270) {
            return `Current Wind Conditions (direction & speed): WSW ${windSpeed}`
        } 
        else if ( windDegree >= 270 && windDegree < 292.5) {
            return `Current Wind Conditions (direction & speed): W ${windSpeed}`
        } 
        else if ( windDegree >= 292.5 && windDegree < 315) {
            return `Current Wind Conditions (direction & speed): WNW ${windSpeed}`
        } 
        else if ( windDegree >= 315 && windDegree < 337.5) {
            return `Current Wind Conditions (direction & speed): NW ${windSpeed}`
        } 
        else if ( windDegree >= 337.5 && windDegree < 360) {
            return `Current Wind Conditions (direction & speed): NNW ${windSpeed}`
        } 
        else {
            return `Current Wind Conditions (direction & speed): N ${windSpeed}`
        }
    };

    
    return (
    <Card.Group>
        <Card>
        <Card.Content>
            <Card.Header> Today is a ____ day for ____ </Card.Header>
            <Image
            // float='right'
            alt= { currentInfo.description }
            src= {`http://openweathermap.org/img/wn/${props.currentInfo.icon}.png`}
            label={dateDisplay(currentInfo.dateTime)}
            />
            <Card.Meta>{ currentInfo.description }</Card.Meta>
            <Card.Description>
            Current temperature: {currentInfo.currentTemp}° 
            <br/>
            Feels like: {currentInfo.feelsLike}°
            <br/>
            Today's High: {currentForecast.maxTemp}° Today's Low: {currentForecast.minTemp}°
            <br/>
            { convertWindDirection(currentInfo.windDegree, currentInfo.windSpeed) }
            <br/>
            Air Quality Index (AQI): { currentInfo.airQuality}
            <br/>
            { toggleVisibility(currentInfo.visibility)} 
            <br/>
            { toggleHumidity(currentInfo.humidity)} 
            <br/>
            { toggleSunset(currentInfo.sunset)} 
            </Card.Description>
        </Card.Content>
        </Card>
    </Card.Group>  
    )
};


export default CurrentCard;