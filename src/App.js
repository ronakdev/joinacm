import React from 'react';
import firebase from "./util/firebase"

import Map from "./components/Map/index.jsx"
import Particles from "./components/Particles/index.jsx"
import Sidebar from "./components/Sidebar/index.jsx"

import './App.less';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {x: -1, y: -1}
  }

  render() {
    firebase.database().ref("spawnLocation").set({
      updatedAt: Date.now(),
      x: this.state.x,
      y: this.state.y
    })
    
    return (
      <div className="App">        
        <Sidebar />
        {/* <Particles className="particles" /> */}

        <Map parent={this}/>
        <p>
          Last click was on {this.state.x} and {this.state.y}
        </p>
      </div>
    );
  }
}

export default App;
