import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ForecastCard = (props) => {
    let inputParams = props.inputParams
    console.log('input Props', inputParams)
    console.log('forecast Props', props.forecastInfo)

    console.log(props.currentInfo.icon)
    return (
    <Card.Group>
    <Card>
    <Card.Content>
        <Card.Header>

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