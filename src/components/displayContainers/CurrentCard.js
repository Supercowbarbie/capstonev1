import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CurrentCard = (props) => {
    let inputParams = props.inputParams
    let currentInfo = props.currentInfo
    let currentForecast = props.forecastInfo['0']

    const unitDisplay = (unit) => {
        // a function to display the correct units for temp & wind speed
        let unitsObj= {};   
        if (unit === 'imperial') {
            unitsObj= {
            temp: 'F',
            speed: 'MPH'
            }
        }
        else if (unit === 'metric') {
            unitsObj= {
            temp: 'C',
            speed: 'm/s'
            }
        }
        else if (unit === 'standard') {
            unitsObj= {
            temp: 'K',
            speed: 'm/s'
            }
        }
        return unitsObj
    };
    let unitObj = unitDisplay(inputParams.unit);

    const aqiDisplay = (aqi) => {
        // function to add descrription to AQI 
        if (aqi === 1) {
        return 'Air Quality is good. Great day to be active outside!'
        }
        else if (aqi === 2) {
            return 'Air quality is fair. People who are unusually sensitive to air pollution could have symptoms.'
        }
        else if (aqi === 3) {
            return 'Air quality is unhealthy for sensitve groups. OK to be active outside, take more breaks and do less intense activities.'
        }
        else if (aqi === 4) {
            return 'Air quality is poor. Consider moving longer or more intense activities indoors or rescheduling them to another day or time.  '
        }
        else if (aqi === 5) {
            return 'Air quality is very poor. Move all activities indoors or reschedule them for another day.'
        }
    };

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
        return `Weather conditions for ${ formattedDate.weekDay }, 
        ${ formattedDate.month }  
        ${ formattedDate.numberDay }`
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
            return `Wind: N ${windSpeed}`
        } 
        else if ( windDegree >= 22.5 && windDegree < 45) {
            return `Wind: NNE ${windSpeed}`
        } 
        else if ( windDegree >= 45 && windDegree < 67.5) {
            return `Wind: NE ${windSpeed}${unitObj.speed}`
        } 
        else if ( windDegree >= 67.5 && windDegree < 90) {
            return `Wind: ENE ${windSpeed}${unitObj.speed}`
        } 
        else if ( windDegree >= 90 && windDegree < 112.5) {
            return `Wind: E ${windSpeed}${unitObj.speed}`
        } 
        else if ( windDegree >= 112.5 && windDegree < 135) {
                return `Wind: ESE ${windSpeed}${unitObj.speed}`
            } 
        else if ( windDegree >= 135 && windDegree < 157.5) {
            return `Wind: SE ${windSpeed}${unitObj.speed}`
        } 
        else if ( windDegree >= 157.5 && windDegree < 180) {
            return `Wind: SSE ${windSpeed}${unitObj.speed}`
        } 
        else if ( windDegree >= 180 && windDegree < 202.5) {
            return `Wind: S ${windSpeed}${unitObj.speed}`
        } 
        else if ( windDegree >= 202.5 && windDegree < 225) {
            return `Wind: SSW ${windSpeed}${unitObj.speed}`
        } 
        else if ( windDegree >= 225 && windDegree < 247.5) {
            return `Wind: SW ${windSpeed}${unitObj.speed}` 
        } 
        else if ( windDegree >= 247.5 && windDegree < 270) {
            return `Wind: WSW ${windSpeed}${unitObj.speed}`
        } 
        else if ( windDegree >= 270 && windDegree < 292.5) {
            return `Wind: W ${windSpeed}${unitObj.speed}`
        } 
        else if ( windDegree >= 292.5 && windDegree < 315) {
            return `Wind: WNW ${windSpeed}${unitObj.speed}`
        } 
        else if ( windDegree >= 315 && windDegree < 337.5) {
            return `Wind: NW ${windSpeed}${unitObj.speed}`
        } 
        else if ( windDegree >= 337.5 && windDegree < 360) {
            return `Wind: NNW ${windSpeed}${unitObj.speed}`
        } 
        else {
            return `Wind: N ${windSpeed}${unitObj.speed}`
        }
    };
    const createScore = () => {
        // create a variable to keep track of the correct input param matches
        let score = 3
        for (let weatherCondition in inputParams.weatherConditions) {
            if (inputParams.weatherConditions[weatherCondition] && (weatherCondition === currentInfo.description)) {
            score += 1
            console.log('currentWeather:',score)
            }
        }
        if (inputParams.minTemp && (currentForecast.minTemp < parseInt(inputParams.minTemp))){
            score -= 1 
            console.log('currentTemp:',score)
        }
        else if (inputParams.minWind || inputParams.maxWind) {
            if ((currentInfo.windSpeed > parseInt(inputParams.minWind)) || (currentInfo.windSpeed < parseInt(inputParams.maxWind))){
            score -= 1
            console.log('currentWind:',score)
            }
        }
        else if (inputParams.minAQI || inputParams.maxAQI) {
            if ((currentInfo.airQuality < parseInt(inputParams.minAQI)) || (currentInfo.airQuality > parseInt(inputParams.maxAQI))){
                score -= 1
                console.log('currentAir:',score)
            }
        }
        else {
            return `No input values`
        }
        return score
        };
        let score = createScore();
        let bestDay = (score) => {
            if (score === 4) {
                return `This is a perfect day for your activity!`
            }
            else if (score === 3) {
                return `This is a great day for your activity!`
            }
            else if (score === 2) {
                return `This is an OK day for your activity.`
            }
            else if (score === 1) {
                return `This is not a good day for your activity.`
            }
            else if (score === 0) {
                return `This is a bad day for your activity.`
            }
            else {
                return `Enter search parameters to see if this is a good day for your activity`
            }
        }

        const capitalize = (description) => {
            let capitalDescription = description.charAt(0).toUpperCase() 
            + description.slice(1)
            return `${capitalDescription}`
        };

    return (
        <Card color ='teal'>
        <Card.Content>
            <Card.Header textAlign='center' as="h3"> { bestDay(score) } </Card.Header>
            <Image
            floated='left'
            alt= { currentInfo.description }
            src= {`http://openweathermap.org/img/wn/${props.currentInfo.icon}.png`}
            label={dateDisplay(currentInfo.dateTime)}
            />
            <Card.Meta>{ capitalize(currentInfo.description) }</Card.Meta>
            <Card.Description>
            Current temperature: {currentInfo.currentTemp}°{unitObj.temp} 
            <br/>
            Feels like: {currentInfo.feelsLike}°{unitObj.temp} 
            <br/>
            {`Today's High: ${currentForecast.maxTemp}°${unitObj.temp}`}
            <br/>
            {`Today's Low: ${currentForecast.minTemp}°${unitObj.temp} `}
            <br/>
            { convertWindDirection(currentInfo.windDegree, currentInfo.windSpeed) }
            <br/>
            Air Quality Index (AQI): { aqiDisplay(currentInfo.airQuality)}
            <br/>
            Visibility: { currentInfo.visibility} meters
            <br/>
            { toggleHumidity(currentInfo.humidity)} 
            <br/>
            { toggleSunset(currentInfo.sunset)} 
            </Card.Description>
        </Card.Content>
        </Card>
    )
};

export default CurrentCard;