import React, { Component } from 'react';
import "./PersonCard.css";

//This is a component

export default class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            ageUp:this.props.age,
        };
    }
    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div className = "personCard">
                <h3 className = "Names">{lastName}, {firstName}</h3>
                <p className = "Age">Age: {this.state.ageUp}</p>
                <p className = "Hair-Color">Hair Color: {hairColor}</p>
                <button onClick = {() => this.setState({ageUp: this.state.ageUp + 1})}>Increase Age</button>
                {/* <button onClick = {() => alert("Button clicked")}>Click Me</button> */}
            </div>
        )
    }
}
