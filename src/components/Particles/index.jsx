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
              value: 50
            },
            size: {
              value: 2
            },
            color: {
              value: "#ff0000"
            }
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
    );
  }
}

export default BackgroundParticles;
