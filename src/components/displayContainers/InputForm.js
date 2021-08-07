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

    return (
        <Form>
            <Form.Field 
                control={Input}
                required
                label='Location'
                placeholder='Enter activity location'
                // width={15}
                onChange={(event) => setInputObj({location:event.target.value})}
                />
            <br></br>
            <Form.Group widths='equal'>
                <label>Units (Default Imperial)</label>
                <Form.Field
                control={Radio}
                label='Imperial'
                value='imperial'
                checked={inputObj.unit === "imperial"}
                onChange={(event) => setInputObj({unit: event.target.value})}
                />
                <Form.Field
                control={Radio}
                label='Metric'
                value='metric'
                checked={inputObj.unit === 'metric'}
                onChange={(event) => setInputObj({unit: event.target.value})}
                />
                <Form.Field
                control={Radio}
                label='Standard'
                value='standard'
                checked={inputObj.unit === 'standard'}
                onChange={(event) => setInputObj({unit: event.target.value})}
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
                onChange={(event) => setInputObj({maxWind: event.target.value})}
                />
                <Form.Field
                control={Input}
                placeholder='Max Wind Speed'
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
                label='Show Sunset Time'
                checked={inputObj.sunset === true}
                onChange={(event) => setInputObj({sunset: event.target.value})}
                />
                <Form.Field
                    control={Checkbox}
                    label='Show Humidity'
                    checked={inputObj.humidity === true}
                onChange={(event) => setInputObj({humidity: event.target.value})}
                />
                <Form.Field
                    control={Checkbox}
                    label='Show Visibility'
                    checked={inputObj.visibility === true}
                    onChange={(event) => setInputObj({visibility: event.target.value})}
                />
            </ Form.Group >
                <br></br>
            <Form.Field control={Button}>Submit</Form.Field>
            </Form>
        )

    // return (
    //     <div>
    //         <h2>Find Current Weather Conditions</h2>
    //         {/* Add conditions to filter here */}
    //         {/* <form onSubmit={getLocation}> */}
    //         <form onSubmit={ () => props.onClickCallback(inputObj) }>
    //             <input
    //                 type="text"
    //                 placeholder="Enter Location"
    //                 maxLength="50"
    //                 value={location}
//                     onChange={(event) => setInputObj.location(event.target.value)}
    //                 // onChange={(event) => setLocation(event.target.value)}
    //                 />
    //             <label>
    //                 <input
    //                     type="radio"
    //                     name="units"
    //                     checked={unit === "imperial"}
    //                     value="imperial"
    //                     onChange={(event) => setInputObj.unit(event.target.value)}
    //                     // onChange={(event) => setUnit(event.target.value)}
    //                     />
    //                 Fahrenheit
    //             </label>
    //             <label >
    //                 <input
    //                     type="radio"
    //                     name="units"
    //                     checked={unit === "metric"}
    //                     value="metric"
    //                     onChange={(event) => setInputObj.unit(event.target.value)}
    //                     // onChange={(event) => setUnit(event.target.value)}
    //                     />
    //                 Celcius
    //             </label>
                
    //             <button 
    //             type="submit"
    //             >
    //                 Get Forecast
    //             </button>
    //         </form>
    //     </div>
    // )
}

export default InputForm;