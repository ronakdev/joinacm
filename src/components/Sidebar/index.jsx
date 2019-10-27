import React, { Component } from "react";
import { Button } from "antd";

import "./style.less";

class Sidebar extends Component {
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
        <Button className="button" type="danger">
          <strong>START GAME</strong>
          <i>Test</i>
        </Button>
      </div>
    );
  }
}

export default Sidebar;
