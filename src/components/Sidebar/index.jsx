import React, { Component } from "react";
import { Button } from "antd";
import {reset} from "../../util/firebase"
import "./style.less";

const statuses = ["Start Player 1 Game", "End Player 1 Game", "Start Player 2 Game", "End Player 2 Game"]

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      statusIndex : 0
    }
  }
  render() {
    return (
      <div className="sidebar">
        <h1>VIGHT</h1>
        <h3>Welcome to Vight, an interactive shooter between</h3>
        <ol>
          <li>sdsd</li>
          <li>sdsd</li>
          <li>sdsd</li>
        </ol>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis
        </p>
        <Button className="button" type="danger" onClick={() => {
          reset()
          this.setState({
            statusIndex: this.state.statusIndex + 1
          })
        }}>
          <strong>{statuses[this.state.statusIndex % statuses.length]}</strong>
        </Button>
      </div>
    );
  }
}

export default Sidebar;
