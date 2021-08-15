import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CurrentCard = (props) => {
    // console.log(props)

    let timeConvert = (timestamp) => {
        // a function to convert UNIX timestamp to words
        // timestamp = 1627797600
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        
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
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let date = new Date(timestamp*1000)
        return months[date.getMonth()]
    }

    const convertWindDirection = () => {
        // function that converts wind degrees to direction

    }

    
    // console.log(props.currentInfo.icon)
    return (
    <Card.Group>
        <Card>
        <Card.Content>
            <Card.Header>
                {`Forecast for 
                ${weekDayConvert(props.currentInfo.dateTime)}, 
                ${monthConvert(props.currentInfo.dateTime)},  
                ${numberDayConvert(props.currentInfo.dateTime)}`}
            </Card.Header>
            <Image
            float='right'
            src= {`http://openweathermap.org/img/wn/${props.currentInfo.icon}.png`}
            />
            <Card.Meta>Today is a great day for kayaking</Card.Meta>
            <Card.Description>
            Today is {props.currentInfo.dateTime}
            The current is: {props.currentInfo.currentTemp}
            <br/>
            Wind info (speed + direction): {props.currentInfo.windSpeed} {props.currentInfo.windDegree}
            <br/>
            Air quality is: {props.currentInfo.airQuality}
            <br/>
            Visibility: {props.currentInfo.visibility}
            <br/>
            Humidity: {props.currentInfo.humidity}
            <br/>
            Sunset is at: {props.currentInfo.sunset}

            </Card.Description>
        </Card.Content>
        </Card>
    </Card.Group>  
    )
};


export default CurrentCard;