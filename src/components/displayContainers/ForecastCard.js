import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ForecastCard = (props) => {
    let inputParams = props.inputParams
    console.log('input Props', inputParams)
    console.log('forecast Props', props.forecastInfo)

    let timeConvert = (timestamp) => {
        // a function to convert UNIX timestamp to words
        // timestamp = 1627797600
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
        return formattedDate
    }
    let weekDayConvert = (timestamp) => {
        // a function to convert UNIX timestamp to words
        // timestamp = 1627797600
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        
        let date = new Date(timestamp*1000)
        return days[date.getDay()]
    };

    let numberDayConvert = (timestamp) => {
        // a function to convert UNIX timestamp to words
        let date = new Date(timestamp*1000)
        return date.getDate()
    }

    let monthConvert = (timestamp) => {
        // a function to convert UNIX timestamp to words
        const months = ["January", "February", "March", "April", "May", "June", "July", 
        "August", "September", "October", "November", "December"]
        let date = new Date(timestamp*1000)
        return months[date.getMonth()]
    }

    
    // console.log(props.currentInfo.icon)
    return (
    <Card.Group>
        <Card>
        <Card.Content>
            <Card.Header>
                {`Forecast for:
                ${weekDayConvert(props.dateTime)},  
                ${monthConvert(props.dateTime)},  
                ${numberDayConvert(props.dateTime)}`}
            </Card.Header>
            <Image
            float='right'
            alt=''
            src= {`http://openweathermap.org/img/wn/${props.icon}.png`}
            label={ props.description }
            />
            <Card.Meta>Today is a ___ day for ____</Card.Meta>
            <Card.Description>
            Max temp: {props.maxTemp} Min temp: {props.minTemp}
            <br/>
            Wind info (speed + direction): {props.windSpeed} {props.windDegree}
            <br/>
            Air quality is: {props.airQuality}
            <br/>
            Visibility: {props.visibility}
            <br/>
            Humidity: {props.humidity}
            <br/>
            Sunset is at: {props.sunset}

            </Card.Description>
        </Card.Content>
        </Card>
    </Card.Group>  
    )
};


export default ForecastCard;