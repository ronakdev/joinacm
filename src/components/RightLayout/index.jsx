import React, { Component } from "react";

import ProfileCard from "../ProfileCard/index.jsx";
import ProgressBar from "../Progress/index.jsx";
import Map from "../Map/index.jsx";

import "./style.less";

class RightLayout extends Component {
  render() {
    return (
      <div className="outerlayout">
        <div className="layout">
          <ProfileCard className="card" />
        </div>
        {/* <div className="row">css is not that hard</div> */}
        <ProgressBar className="bar" />
        <Map className="map" />
      </div>
    );
  }
}

export default RightLayout;
