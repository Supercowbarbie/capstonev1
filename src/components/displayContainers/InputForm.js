import React, { useState  } from 'react';
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
} from 'semantic-ui-react'


const InputForm = (props) => {
    // 
    // let [location, setLocation] = useState('');
    // let [unit, setUnit] = useState('imperial');
    let [inputObj, setInputObj] = useState({
        location: "",
        minTemp: "",
        maxTemp: "",
        minWind: "",
        maxWind: "",
        minAQI: "",
        maxAQI: "",
        unit: "imperial",
        humidity: false,
        visibility: false,
        sunset: false
    })
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    // const buildInputObj = (event) => {
    //     event.preventDefault();

    //     if (location.length === 0) {
    //         return setError(true);
    //     }
    //     // Clear state in preparation for new data
    //     setError(false);    
    //     setLoading(true);
    // }

    const clickButtonDeal = (obj) => {
        console.log(obj);
        return props.onClickCallback(obj);
    }


    const handleChange = (e, {value}) => setInputObj({value})
    const {value} = inputObj;

    return (
    // render(
        <Form>
            <Form.Field 
                control={Input}
                required
                label='Location'
                placeholder='Enter activity location'
                // width={15}
                value = {inputObj.location}
                onChange={(event) => setInputObj({location:event.target.value})}
                />
            <br></br>
            <Form.Group widths='equal'>
                <label>Units (Default Imperial)</label>
                <Form.Field
                control={Radio}
                label='Imperial'
                value='imperial'
                checked={value === "imperial"}
                onChange={handleChange}
                />
                <Form.Field
                control={Radio}
                label='Metric'
                value='metric'
                checked={value === "metric"}
                onChange={handleChange}
                />
                <Form.Field
                control={Radio}
                label='Standard'
                value='standard'
                checked={value === "standard"}
                onChange={handleChange}
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
                Go to airnow.gov/aqi/aqi-basics for more information about AQI 
            </label>
                <Form.Field
                control={Input}
                placeholder='0 = Good'
                onChange={(event) => setInputObj({minAPI: event.target.value})}
                />
                <Form.Field
                control={Input}
                placeholder='200 = Unhealthy'
                onChange={(event) => setInputObj({maxAPI: event.target.value})}
                />
            </ Form.Group >
            <br></br>
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
                <Form.Field
                control={Checkbox}
                toggle
                label='Show Visibility'
                checked={inputObj.visibility === true}
                onChange={(event) => setInputObj({visibility: event.target.value})}
                />
            </ Form.Group >
                <br></br>
            <Form.Field 
            control={Button}
            onClick={ () => clickButtonDeal(inputObj) }
            >
                Get Forecast
                </Form.Field>

            </Form>
        )
    
};

export default InputForm;

