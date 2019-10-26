import React, { Component } from 'react';
import { Stage, Layer, Circle, Text } from 'react-konva';
import Konva from 'konva';

class ColoredCircle extends React.Component {
  state = {
    color: 'green'
  };
  handleClick = (e) => {
    this.props.gp.setState({x: e.evt.screenX, y: e.evt.screenY})
    console.log(e.evt)
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };
  render() {
    return (
      <Circle
        x={300}
        y={300}
        width={500}
        height={500}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
      />
    );
  }
}

export default class Map extends Component {
  render() {
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Try click on rect" />
          <ColoredCircle gp={this.props.parent} />
        </Layer>
      </Stage>
    );
  }
}