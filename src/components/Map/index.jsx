import React, { Component } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import Konva from "konva";
import BackgroundParticles from "../Particles";

import "./style.less";

class ColoredRect extends React.Component {
  state = {
    color: "green"
  };

  setColor = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });  
  }


  render() {
    return (
      <Rect
        width={550}
        height={550}
        opacity="0.5"
        fill={this.state.color}
        shadowBlur={5}
        onClick={(e) => { this.setColor(); this.props.gp.setState({x: e.clientX, y: e.clientY})}}
        ref={this.props.innerRef}
      />
    );
  }
}

export default class Map extends Component {

  constructor(props) {
    super(props)
    this.rect = React.createRef();
  }

  render() {
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    console.log(this.rect)
    return (
      <div style={{ position: "relative", }} onClick={(e) => {
        this.rect.current.fire('click', e);
        console.log(e)
        }}>
        <Stage width={550} height={550}>
          <Layer>
            <ColoredRect innerRef={this.rect} gp={this.props.parent} handleClick={this.toggleColor}/>
          </Layer>
        </Stage>
        <BackgroundParticles />
      </div>
    );
  }
}
