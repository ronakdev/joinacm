import React, { Component } from "react";
import { Stage, Layer, Rect } from "react-konva";
import Konva from "konva";
import BackgroundParticles from "../Particles";
import {sendSpawn} from "../../util/firebase";
import "./style.less";

class ColoredRect extends React.Component {
  state = {
    color: "grey"
  };

  setColor = () => {
    // this.setState({
    //   color: Konva.Util.getRandomColor()
    // });  
  }


  render() {
    return (
      <Rect
        width={550}
        height={550}
        opacity="0.5"
        fill={this.state.color}
        shadowBlur={5}
        onClick={(e) => { this.setColor() } }
        ref={this.props.innerRef}
      />
    );
  }
}

export default class Map extends Component {

  constructor(props) {
    super(props)
    this.rect = React.createRef();
    this.state = {
      zombies: []
    }
  }

  render() {
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    console.log(this.state.zombies)
    return (
      <div style={{ position: "relative", }} onClick={(e) => {
        let x = e.clientX - 510
        let y = e.clientY - 30
        
        let id = sendSpawn(x, y) ;

        let array = this.state.zombies
        array.push({
          x: x,
          y: y,
          id: id
        })
        this.setState({
          zombies: array
        })
       

        this.rect.current.fire('click', e);
        }}>
        <Stage width={550} height={550}>
          <Layer>
            <ColoredRect innerRef={this.rect} gp={this.props.parent} handleClick={this.toggleColor}/>
            { this.state.zombies.map((zData, index) => {
              console.log(zData)
              return <Zombie key={index} id={zData.id} x={zData.x} y={zData.y} />
            })}
          </Layer>
        </Stage>
        <BackgroundParticles />
      </div>
    );
  }
}

class Zombie extends React.Component {
  state = {
    color: "green"
  };

  setColor = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });  
  }


  render() {
    console.log('ye rects')
    return (
      <Rect
        x={this.props.x}
        y={this.props.y}
        width={50}
        height={50}
        opacity="0.5"
        fill={this.state.color}
        shadowBlur={5}
        onClick={(e) => { this.setColor() } }
        ref={this.props.innerRef}
      />
    );
  }
}