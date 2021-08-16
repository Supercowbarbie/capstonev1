import React, { useState  } from 'react';
import {
    Button,
    Checkbox,
    Form,
    FormField,
    Input,
    Radio,
} from 'semantic-ui-react'
import WeatherSummary from './WeatherSummary';


const InputForm = (props) => {
    
    let [inputObj, setInputObj] = useState({
        location: "",
        minTemp: "",
        maxTemp: "",
        minWind: "",
        maxWind: "",
        minAQI: "",
        maxAQI: "",
        weatherConditions: [],
        unit: "imperial",
        humidity: false,
        visibility: false,
        sunset: false
    })
    // let [error, setError] = useState(false);
    // let [loading, setLoading] = useState(false);

    // const buildInputObj = (event) => {
    //     event.preventDefault();

    //     if (location.length === 0) {
    //         return setError(true);
    //     }
    //     // Clear state in preparation for new data
    //     setError(false);    
    //     setLoading(true);
    // }

    // const clickButtonDeal = (obj) => {
    //     console.log(obj);
    //     return props.onClickCallback(obj);
    // }


    const clickButtonDeal = (event, obj) => {
        event.preventDefault();
        props.onClickCallback(inputObj);
    }

    return (
        <div>
        <Form
        onSubmit={ clickButtonDeal }>
            <Form.Field 
                control={Input}
                required
                label='Location'
                placeholder='Enter activity location'
                // width={15}
                value = {inputObj.location}
                // onChange={(event) => setInputObj({location:event.target.value})}
                onChange={(event) => setInputObj({...inputObj, location:event.target.value})}
                />
            <br></br>
            <Form.Group widths='equal'>
                <label>Units (Default Imperial)</label>
                <Form.Field
                control={Radio}
                label='Imperial'
                value='imperial'
                name='imperial'
                checked={inputObj.unit  === "imperial"}
                onChange={(event) => setInputObj({...inputObj, unit: 'imperial'})}
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
            <Form.Group widths='equal' inline>
            <label> Temperature Range</label>
                <Form.Field
                control={Input}
                // label='Minimum Temperature'
                placeholder='Min Temp'
                // width={2}
                onChange={(event) => setInputObj({minTemp: event.target.value})}
                />
                <Form.Field
                control={Input}
                // label='Maximum Temperature'
                placeholder='Max Temp'
                // width={2}
                onChange={(event) => setInputObj({maxTemp: event.target.value})}
                />
            </Form.Group>
            <br></br>
            <Form.Group widths='equal' inline>
            <label> Wind Range</label>
                <Form.Field
                control={Input}
                placeholder='Min Wind Speed'
                onChange={(event) => setInputObj({mixWind: event.target.value})}
                />
                <Form.Field
                control={Input}
                placeholder='Max Wind Speed'
                onChange={(event) => setInputObj({maxWind: event.target.value})}
                />
            </ Form.Group >
            <br></br>
            <Form.Group widths='equal' inline>
            <label> Air Quality Index (AQI) Range
            <br></br>
            </label>
                <Form.Field
                control={Input}
                placeholder='1 = Good'
                onChange={(event) => setInputObj({minAPI: event.target.value})}
                />
                <Form.Field
                control={Input}
                placeholder='5 = Unhealthy'
                onChange={(event) => setInputObj({maxAPI: event.target.value})}
                />
            </ Form.Group >
            <br></br>
            <Form.Group grouped>
                <label>HTML checkboxes</label>
                <Form.Field label='This one' control='input' type='checkbox' />
                <Form.Field label='That one' control='input' type='checkbox' />
                </Form.Group>
            < Form.Group >
                <Form.Field
                control={Checkbox}
                toggle
                label='Show Sunset Time'
                checked={inputObj.sunset === true}
                onChange={(event) => setInputObj({sunset: event.target.value})}
                />
                <Form.Field
                control={Checkbox}
                toggle
                label='Show Humidity'
                checked={inputObj.humidity === true}
                onChange={(event) => setInputObj({humidity: event.target.value})}
                />
                <Form.Field> 
                    <Checkbox
                    toggle
                    label='Show Visibility'
                    checked={inputObj.visibility === true}
                    onChange={(event) => setInputObj({visibility: event.target.value})}
                    />
                </Form.Field>

                {/* <Form.Field
                control={Checkbox}
                toggle
                label='Show Visibility'
                checked={inputObj.visibility === true}
                onChange={(event) => setInputObj({visibility: event.target.value})}
                /> */}
            </ Form.Group >
                <br></br>
            {/* <Form.Field 
            control={Button}
            onClick={ () => clickButtonDeal(inputObj) }
            > */}
                <Form.Field>
                    <Button type='submit'>
                        Get Forecast
                    </Button>
                </Form.Field>
            </Form>
            
            {/* <WeatherSummary 
            currentDay={props.currentDay} 
            forecastInfo={props.forecastInfo}
            inputParams={ inputObj} /> */}
            </div>
        )
};

export default InputForm;

