import React, { useState  } from 'react';
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Header,
    Grid
} from 'semantic-ui-react'


const InputForm = (props) => {
    
    let [inputObj, setInputObj] = useState({
        location: "",
        minTemp: "",
        maxTemp: "",
        minWind: "",
        maxWind: "",
        minAQI: "",
        maxAQI: "",
        weatherConditions: {
            'clear sky': false,
            'few clouds': false,
            'scattered clouds': false,
            'overcast clouds': false,
            'broken clouds': false,
            'shower rain': false,
            'rain': false,
            'thunderstorm': false,
            'snow': false,
            'mist': false
        },
        unit: "imperial",
        humidity: false,
        sunset: false
    })

    const clickButtonDeal = (event, obj) => {
        event.preventDefault();
        props.onClickCallback(inputObj);
    }

    return (
        <div>
        <Header textAlign='center' as='h3' color='grey'>Use the form below to select the parameters for your outdoor activity</Header>
        <Form
        onSubmit={ clickButtonDeal }>
            <Form.Field 
                control={Input}
                required
                label='Location'
                placeholder='Enter activity location'
                // width={15}
                value = {inputObj.location}
                onChange={(event) => setInputObj({...inputObj, location:event.target.value})}
                />
            <br></br>
            <Form.Group inline>
                <label> Units (Default Imperial) </label>
                <Form.Field
                control={ Radio }
                label='Imperial'
                value='imperial'
                name='imperial'
                checked={ inputObj.unit  === "imperial" }
                onChange={(event) => setInputObj({ ...inputObj, unit: 'imperial' })}
                />
                <Form.Field
                control={Radio}
                label='Metric'
                value='metric'
                name='metric'
                checked={inputObj.unit  === "metric"}
                onChange={(event) => setInputObj({...inputObj, unit: 'metric'})}
                />
                <Form.Field
                control={Radio}
                label='Standard'
                value='standard'
                name='standard'
                checked={inputObj.unit === "standard"}
                onChange={(event) => setInputObj({...inputObj, unit: 'standard'})}
                />
            </Form.Group>
            <br></br>
            <Form.Group inline>
                <label> Temperature Range </label>
                <Form.Field
                control={Input}
                // label='Minimum Temperature'
                placeholder='Min Temp'
                name= 'minTemp'
                // width={2}
                onChange={(event) => setInputObj({...inputObj, minTemp: event.target.value})}
                />
                <Form.Field
                control={Input}
                // label='Maximum Temperature'
                placeholder='Max Temp'
                name= 'maxTemp'
                // width={2}
                onChange={(event) => setInputObj({...inputObj, maxTemp: event.target.value})}
                />
            </Form.Group>
            <br></br>
            <Form.Group inline>
            <label> Wind Range</label>
                <Form.Field
                control={Input}
                placeholder='Min Wind Speed'
                name= 'minWind'
                onChange={(event) => setInputObj({...inputObj, maxWind: event.target.value})}
                />
                <Form.Field
                control={Input}
                placeholder='Max Wind Speed'
                name= 'maxWind'
                onChange={(event) => setInputObj({...inputObj, maxWind: event.target.value})}
                />
            </ Form.Group >
            <br></br>
            <Form.Group inline>
            <label> Air Quality Index (AQI) Range
            <br></br>
            </label>
                <Form.Field
                control={Input}
                placeholder='1 = Good'
                name='minAQI'
                onChange={(event) => setInputObj({...inputObj, minAQI: event.target.value})}
                />
                <Form.Field
                control={Input}
                placeholder='5 = Unhealthy'
                name='maxAQI'
                onChange={(event) => setInputObj({...inputObj, maxAQI: event.target.value})}
                />
            </ Form.Group >
            <br></br>
            <Form.Group inline >
                <label>Weather Conditions</label>
                <Form.Field 
                control={Checkbox} 
                label='Clear sky' 
                value='clear sky' 
                // checked={inputObj.weatherConditions['clear sky'] === true}
                onChange={(event) => setInputObj({
                    ...inputObj, weatherConditions: {
                        ...inputObj.weatherConditions, 
                        'clear sky': true,
                    },})}
                />
                <Form.Field 
                control={Checkbox}
                label='Few clouds' 
                name='few clouds' 
                value='few clouds'
                // checked={inputObj.weatherConditions['few clouds' ] === true}
                onChange={(event) => setInputObj({
                    ...inputObj, weatherConditions: {
                        ...inputObj.weatherConditions, 
                        'few clouds': true,
                    },})}
                />
                <Form.Field
                control={Checkbox}
                label='Overcast clouds'
                value='overcast clouds'
                name='overcast clouds'
                // checked={inputObj.weatherConditions['overcast clouds'] === true}
                onChange={(event) => setInputObj({
                    ...inputObj, weatherConditions: {
                        ...inputObj.weatherConditions, 
                        'overcast clouds': true,
                    },})}
                />
                <Form.Field
                control={Checkbox}
                label='Broken clouds'
                value='broken clouds'
                name='broken clouds'
                // checked={inputObj.weatherConditions['broken clouds'] === true}
                onChange={(event) => setInputObj({
                    ...inputObj, weatherConditions: {
                        ...inputObj.weatherConditions, 
                        'broken clouds': true,
                    },})}
                />
                <Form.Field
                control={Checkbox}
                label='Scattered clouds'
                value='scattered clouds'
                name='scattered clouds'
                // checked={inputObj.weatherConditions['scattered clouds'] === true}
                onChange={(event) => setInputObj({
                    ...inputObj, weatherConditions: {
                        ...inputObj.weatherConditions, 
                        'scattered clouds': true,
                    },})}
                />
                <Form.Field
                control={Checkbox}
                label='Shower rain'
                value='shower rain'
                name='shower rain'
                // checked={inputObj.weatherConditions['shower rain'] === true}
                onChange={(event) => setInputObj({
                    ...inputObj, weatherConditions: {
                        ...inputObj.weatherConditions, 
                        'shower rain': true,
                    },})}
                />
                <Form.Field
                control={Checkbox}
                label='Rain'
                value='rain'
                name='rain'
                // checked={inputObj.weatherConditions['rain'] === true}
                onChange={(event) => setInputObj({
                    ...inputObj, weatherConditions: {
                        ...inputObj.weatherConditions, 
                        'rain': true,
                    },})}
                />
                <Form.Field
                control={Checkbox}
                label='Thunderstorm'
                value='thunderstorm'
                name='thunderstorm'
                // checked={inputObj.weatherConditions['thunderstorm'] === true}
                onChange={(event) => setInputObj({
                    ...inputObj, weatherConditions: {
                        ...inputObj.weatherConditions, 
                        'thunderstorm': true,
                    },})}
                />
                <Form.Field
                control={Checkbox}
                label='Snow'
                value='snow'
                name='snow'
                // checked={inputObj.weatherConditions['snow'] === true}
                onChange={(event) => setInputObj({
                    ...inputObj, weatherConditions: {
                        ...inputObj.weatherConditions, 
                        'snow': true,
                    },})}
                />
                <Form.Field
                control={Checkbox}
                label='Mist'
                value='mist'
                name='mist'
                // checked={inputObj.weatherConditions['mist'] === true}
                onChange={(event) => setInputObj({
                    ...inputObj, weatherConditions: {
                        ...inputObj.weatherConditions, 
                        'mist': true,
                    },})}
                />
                </Form.Group>
            < Form.Group >
                <Form.Field
                control={Checkbox}
                toggle
                label='Show Sunset Time'
                checked={inputObj.sunset === true}
                onChange={(event) => setInputObj({...inputObj, sunset: true})}
                />
                <Form.Field
                control={Checkbox}
                toggle
                label='Show Humidity'
                checked={inputObj.humidity === true}
                onChange={(event) => setInputObj({...inputObj, humidity: true})}
                />
            </ Form.Group >
                <Grid>
                    <Grid.Column textAlign="center">
                        <Form.Field>
                            <Button type='submit' class="large ui button" >
                                Get Forecast
                            </Button>
                        </Form.Field>
                    </Grid.Column>
                </Grid>
            </Form>
            </div>
        )
};

export default InputForm;

