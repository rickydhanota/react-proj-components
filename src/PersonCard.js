import React, { Component } from 'react';
import "./PersonCard.css";

//This is a component

export default class PropItUp extends Component {
    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div className = "personCard">
                <h3 className = "Names">{lastName}, {firstName}</h3>
                <p className = "Age">Age: {age}</p>
                <p className = "Hair-Color">Hair Color: {hairColor}</p>
                <button onClick = {() => alert("Button clicked")}>Click Me</button>
            </div>
        )
    }
}
