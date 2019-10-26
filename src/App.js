import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from "./components/Map"

function App() {
  constructor(props) {
    this.state = {x: -1, y: -1}
  }
  return (
    <div className="App">
      <Map/>
      <p>
        Last click was on {this.state.x} and {this.state.y}
      </p>
    </div>
  );
}

export default App;
