import React from "react";

import { Progress, message } from "antd";
import { setOnHealthUpdate } from "../../util/firebase";

import "./style.less";

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      health: 100
    };
    setOnHealthUpdate(health => {
      // console.log(`got health!! ${health}`);
      this.setState({
        health: parseInt(health)
      });
    });
  }
  render() {
    // // console.log(this.state.health/100)
    if (this.state.health <= 0) {
      message.info("Player Lost!")
    }
    return (
      <div className="progressbar">
        <Progress
          strokeColor={{
            "10%": "#bd250f",
            "100%": "#18e310"
          }}
          strokeWidth={20}
          percent={this.state.health}
        />
      </div>
    );
  }
}
