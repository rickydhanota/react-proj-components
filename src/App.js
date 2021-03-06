import './App.css';
import React from 'react';
import SomeClassComponent from "./SomeClassComponent";
import PersonCard from "./PersonCard";
import PersonCardPropFunction from './PersonCardPropFunction';


function App() {
  return (
    <div className="App">

      <h1>Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
      </ul>

      <PersonCard firstName = {"Ricky"} lastName = {"Dhanota"} age = {26} hairColor = {"Black"} /> 
      {/* This is a prop */}
      <PersonCard firstName = {"Sukhpreet"} lastName = {"Gill-Dhanota"} age = {27} hairColor = {"Blonde"} />
      <PersonCard firstName = {"Cleo"} lastName = {"Gill"} age = {5} hairColor = {"Grey"} />

      <SomeClassComponent ></SomeClassComponent>

      {/* This is the prop functions */}
      <PersonCardPropFunction firstName = {"Ricky"} lastName = {"Dhanota"} age = {26} hairColor = {"Black"}  />

    </div>
  );
}

export default App;
