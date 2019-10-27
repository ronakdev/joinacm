import React, { Component } from "react";

import { Icon } from "antd";

import "./style.less";
import {
  timeNow,
  coins,
  getCoinUpdates,
  getTimeUpdates
} from "../../util/firebase";

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c: coins(),
      t: timeNow()
    };
    getCoinUpdates(coinAmount => {
      this.setState({
        c: coinAmount
      });
    });

    getTimeUpdates(time => {
      this.setState({
        t: time
      });
    });
  }

  render() {
    return (
      <div className="profilecard">
        <h1>⠀</h1>
        <Icon type="shop" className="shop" style={{ color: "white" }} />
        <h1>
          {" "}
          ⠀{this.state.c} coins | {Math.floor(this.state.t)} secs
        </h1>
      </div>
    );
  }
}

export default ProfileCard;
