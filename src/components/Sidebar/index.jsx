import React, { Component } from "react";
import { Button } from "antd";
import { reset } from "../../util/firebase";

import Feed from "../../components/Feed/index.jsx";

import "./style.less";

const statuses = [
  "Start Player 1 Game",
  "End Player 1 Game",
  "Start Player 2 Game",
  "End Player 2 Game"
];

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusIndex: 0
    };
  }
  render() {
    return (
      <div className="sidebar">
        <h1>VIGHT</h1>
        <h3>
          Welcome to Vight, an interactive shooter between multiple players
          spawning zombies and one Vighter.
        </h3>
        <Feed />
        <p>
          Players take turns seeing how long they last in Vight!

          The non VR players use their nodes to spawn zombies around for their friend. Be careful, because you have limited funds!

          
        </p>
        <Button
          className="button"
          type="danger"
          onClick={() => {
            reset();
            this.setState({
              statusIndex: this.state.statusIndex + 1
            });
          }}
        >
          <strong>{statuses[this.state.statusIndex % statuses.length]}</strong>
        </Button>
      </div>
    );
  }
}

export default Sidebar;
