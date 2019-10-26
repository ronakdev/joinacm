import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from "./components/Map"

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {x: -1, y: -1}
  }

  render() {
    return (
      <div className="App">
        <Map parent={this}/>
        <p>
          Last click was on {this.state.x} and {this.state.y}
        </p>
      </div>
    );
  }
}

export default App;
