import './App.css';
import React from 'react';
import SomeClassComponent from "./SomeClassComponent";

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

      <SomeClassComponent ></SomeClassComponent>

    </div>
  );
}

export default App;
