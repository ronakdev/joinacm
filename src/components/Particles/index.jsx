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
          move: {
            enable: true,
            speed: 2,
            direction: "top", // Move them off the canvas, either "none", "top", "right", "bottom", "left", "top-right", "bottom-right" et cetera...
            random: true,
            straight: false, // Whether they'll shift left and right while moving.
            out_mode: "out", // What it'll do when it reaches the end of the canvas, either "out" or "bounce".
            bounce: true
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
