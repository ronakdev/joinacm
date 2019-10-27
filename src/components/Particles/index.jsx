import React, { Component } from "react";
import Particles from "react-particles-js";

class BackgroundParticles extends Component {
  render() {
    return (
      // <Particles
      //   params={{
      //     polygon: {
      //       enable: true,
      //       type: "inside",
      //       move: {
      //         radius: 10
      //       },
      //       url: "/logo.svg"
      //     }
      //   }}
      // />
      <Particles
        style={{position: "absolute", top: 0}}
        width="400px"
        height="400px"
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
