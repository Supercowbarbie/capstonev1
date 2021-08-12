import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const ForecastCard = (props) => {
    console.log(props)

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

    const convertWindDirection = () => {
        // function that converts wind degrees to direction

    }
    return (
    <Card.Group>
        <Card>
        <Card.Content>
            
            <Card.Header>Today</Card.Header>
            <Image
            floated='right'
            size='mini'
            src='Images for the weather condition go here'
            />
            <Card.Meta>Today is a great day for kayaking</Card.Meta>
            <Card.Description>
            Today is {props.currentDay.dateTime}
            The temperature is: {props.currentDay.currentTemp}
            <br/>
            Wind info (speed + direction): {props.currentDay.windSpeed} {props.currentDay.windDegree}
            <br/>
            Air quality is: {props.currentDay.airQuality}
            <br/>
            Visibility: {props.currentDay.visibility}
            <br/>
            Humidity: {props.currentDay.humidity}
            <br/>
            Sunset is at: {props.currentDay.sunset}

            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div className='ui two buttons'>
            <Button basic color='green'>
                Approve
            </Button>
            <Button basic color='red'>
                Decline
            </Button>
            </div>
        </Card.Content>
        </Card>
    </Card.Group>
    
)}


export default ForecastCard;