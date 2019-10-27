import React, { Component } from "react";

import { Icon } from "antd";

import "./style.less";

class ProfileCard extends Component {
  render() {
    return (
      <div className="profilecard">
        <Icon type="github" style={{ fontSize: '32px', marginTop: "5px"}} />
        <h1>⠀VIGHT</h1>
      </div>
    );
  }
}

export default ProfileCard;
