import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const ForecastCard = (props) => {
    <Card.Group>
        <Card>
        <Card.Content>
            
            <Card.Header>Monday 6/19</Card.Header>
            <Image
            floated='right'
            size='mini'
            src='Images for the weather condition go here'
            />
            <Card.Meta>Today is a great day for kayaking</Card.Meta>
            <Card.Description>
            Today is 
            The temperature is:
            <br/>
            Wind info (speed + direction): 
            <br/>
            Air quality is:
            <br/>
            Visibility:
            <br/>
            UV index:
            <br/>
            Humidity: 
            <br/>
            Sunset is at:

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
    
}

export default ForecastCard;