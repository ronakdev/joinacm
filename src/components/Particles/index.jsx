import React, { Component } from "react";
import Particles from "react-particles-js";

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
              value: 3
            },
            color: {
              value: "#000"
            }
          },
          interactivity: {
            events: {
              onhover: {
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
