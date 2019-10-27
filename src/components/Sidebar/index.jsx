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
          spawning zombies and one fighter.
        </h3>
        <Feed />
        <p>
          Minecraft is a sandbox video game created by Swedish game developer
          Markus Persson and released by Mojang in 2011. The game allows players
          to build with a variety of different blocks in a 3D procedurally
          generated world, requiring creativity from players.
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
