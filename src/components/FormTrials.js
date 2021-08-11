import React, { useState, Component } from 'react';
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
} from 'semantic-ui-react'


class FormTrials extends Component {

    state = {
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
    }

    // handleChange = (event, { value }) => this.setState({ value })
    
    render() {
        // const { value } = this.state
        
        return (
        <Form>
            <Form.Field 
                control={Input}
                required
                label='Location'
                placeholder='Enter activity location'
                // width={15}
                onChange={(event, { value }) => this.setState({location: value })}
                />
            <br></br>
            <Form.Group widths='equal'>
                <label>Units (Default Imperial)</label>
                <Form.Field
                control={Radio}
                label='Imperial'
                value='imperial'
                checked={this.state.unit === "imperial"}
                onChange={this.handleChange}
                />
                <Form.Field
                control={Radio}
                label='Metric'
                value='metric'
                checked={this.state.unit === 'metric'}
                // onChange={this.handleChange}
                />
                <Form.Field
                control={Radio}
                label='Standard'
                value='standard'
                checked={this.state.unit === 'standard'}
                // onChange={this.handleChange}
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
                // onChange={this.handleChange}
                />
                <Form.Field
                control={Input}
                // label='Maximum Temperature'
                placeholder='Max Temp'
                // width={2}
                // onChange={this.handleChange}
                />
            </Form.Group>
            <br></br>
            <Form.Group widths='equal' inline>
            <label> Wind Range</label>
                <Form.Field
                control={Input}
                placeholder='Min Wind Speed'
                // onChange={this.handleChange}
                />
                <Form.Field
                control={Input}
                placeholder='Max Wind Speed'
                // onChange={this.handleChange}
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
                // onChange={this.handleChange}
                />
                <Form.Field
                control={Input}
                placeholder='200 = Unhealthy'
                // onChange={this.handleChange}
                />
            </ Form.Group >
            <br></br>
            < Form.Group >
                <Form.Field
                control={Checkbox}
                toggle
                label='Show Sunset Time'
                checked={this.state.sunset === true}
                // onChange={this.handleChange}
                />
                <Form.Field
                control={Checkbox}
                toggle
                label='Show Humidity'
                checked={this.state.humidity === true}
                // onChange={this.handleChange}
                />
                <Form.Field
                control={Checkbox}
                toggle
                label='Show Visibility'
                checked={this.state.visibility === true}
                // onChange={this.handleChange}
                />
            </ Form.Group >
                <br></br>
            <Form.Field control={Button}>Get Forecast</Form.Field>
            </Form>
        )
    }
};

export default FormTrials;