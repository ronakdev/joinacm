/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

import ProfileCard from "../ProfileCard/index.jsx";
import ProgressBar from "../Progress/index.jsx";
import Map from "../Map/index.jsx";
import Logo from "./logo.svg"

import "./style.less";

class RightLayout extends Component {
  render() {
    return (
      <div className="outerlayout">
        <div className="layout">
          <ProfileCard className="card" />
        </div>
        <ProgressBar className="bar" />
        <Map className="map" />
        <img src={Logo} width={70} />
      </div>
    );
  }
}

export default RightLayout;
