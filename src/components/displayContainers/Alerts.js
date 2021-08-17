import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Alerts = (props) => {
    let alerts = props.alerts
    console.log('alerts object:', alerts)

    const hourConvert = (timestamp) => {
        // a function to convert UNIX timestamp to words
        let date = new Date(timestamp*1000)
        let hour = date.getHours()
        if (hour > 12) {
            hour -= 12
        }
        return `${hour}:${date.getMinutes()}`
    };
    
    let alertConvert = (timestamp) => {
        // a function to convert UNIX timestamp to words
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
        "Friday", "Saturday"]
        const months = ["January", "February", "March", "April", "May", "June", 
        "July", "August","September", "October", "November", "December"]
        
        let date = new Date(timestamp*1000)
    
        let formattedDate = {
            weekDay: days[date.getDay()],
            month: months[date.getMonth()],
            numberDay: date.getDate()
        }
        return `${ formattedDate.weekDay }, 
        ${ formattedDate.month }  
        ${ formattedDate.numberDay } at ${ hourConvert(date) }`
    };
    return (
        <Card color='red'>
        <Card.Content>
            <Card.Header> </Card.Header>
            <Image
            // float='right'
            alt= 'Black exclamation point inside of a red triangle'
            src= 'https://media.istockphoto.com/vectors/exclamation-point-sign-in-red-triangle-vector-icon-vector-id894875516?b=1&k=6&m=894875516&s=170x170&h=hMw5s6JYP3-8WfbW_ek1lEM4ZAD_E5x1jVjqgYbYYyU='
            />
            <Card.Meta>{ alerts[0].event }</Card.Meta>
            <Card.Description>

                Alert starts: { alertConvert(alerts[0].start) }
                Alert ends: { alertConvert(alerts[0].end) }
                Full description: {alerts[0].description}
            
            </Card.Description>
        </Card.Content>
        </Card>
        )
};

export default Alerts;