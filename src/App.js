import React from 'react';
import firebase from "./util/firebase"

import Map from "./components/Map/index.jsx"
import Sidebar from "./components/Sidebar/index.jsx"
import RightLayout from "./components/RightLayout/index.jsx"

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
        <RightLayout className="RightLayout" parent={this} x={this.state.x} y={this.state.y} />
      </div>
    );
  }
}

export default App;
