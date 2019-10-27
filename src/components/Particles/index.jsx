import React, { Component } from "react";
import Particles from "react-particles-js";

import "./style.less";

class BackgroundParticles extends Component {
  render() {
    return (
      <Particles
        className="particles"
        style={{ position: "absolute", top: 0 }}
        width="550px"
        height="550px"
        params={{
          particles: {
            number: {
              value: 60
            },
            shape: {
              type: ""
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 10,
                size_min: 0.3
              }
            },
            color: {
              value: "#ff0000"
            },
            move: {
              random: true,
              speed: 3,
            }
          }
        }}
      />
    );
  }
}

export default BackgroundParticles;
