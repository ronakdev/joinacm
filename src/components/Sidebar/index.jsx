import React, { Component } from "react";
import { Button } from "antd";


import './style.less';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
          <h1>VIGHT</h1>
          <Button className="button" type="danger">
            <strong>START GAME</strong>
          </Button>
      </div>
    );
  }
}

export default Sidebar;
