import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ForecastCard = (props) => {
    let inputParams = props.inputParams
    console.log(' Props', props)
    console.log('forecast Props', props.forecastInfo)
    let forecast = props.forecastInfo 

    // console.log(props.currentInfo.icon)
    return (
    <Card color='violet'>
        <Card.Content>
            <Card.Header>Today is a ____ day for ____ </Card.Header>
            {/* <Image
            float='right'
            alt=''
            src= {`http://openweathermap.org/img/wn/${props.day.icon}.png`}
            label={ props.day.description }
            /> */}
            <Card.Meta>Today is a ___ day for ____</Card.Meta>
            <Card.Description>
            Max temp: {forecast.maxTemp} Min temp: {forecast.minTemp}
            {/* <br/>
            Wind info (speed + direction): {props.day.windSpeed} {props.day.windDegree}
            <br/>
            Air quality is: {props.day.airQuality}
            <br/>
            Visibility: {props.day.visibility}
            <br/>
            Humidity: {props.humidity}
            <br/>
            Sunset is at: {props.sunset} */}

            </Card.Description>
        </Card.Content>
    </Card> 
    )
};


export default ForecastCard;