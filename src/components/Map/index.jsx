import React, { Component } from "react";
import { Stage, Layer, Rect, Circle } from "react-konva";
import Konva from "konva";
import BackgroundParticles from "../Particles";
import {sendSpawn} from "../../util/firebase";
import "./style.less";
import {message} from "antd"

class ColoredRect extends React.Component {
  state = {
    color: "grey",
    width: 550,
    height: 550
  };


  render() {
    return (
      <Rect
        width={this.state.width}
        height={this.state.height}
        opacity="0.5"
        fill={this.state.color}
        shadowBlur={5}
        onClick={(e) => { this.props.handleClick(e, this.state.width, this.state.height) } }
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
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e, width, height) {
    // console.log(e)
    let x = e.evt.layerX, y = e.evt.layerY

    // check if x is within "no-no zone"
    if (x >= 220 && y >= 200 && x <= 350 && y <= 350) {
      // player area, out of bounds
      message.error("You can't spawn right next to the player!")
      return;
    }
    let id = sendSpawn(x, y, width, height) ;
    simulate(document.getElementsByClassName("particles")[0], {
      type: "click",
      screenX: e.evt.screenX,
      screenY: e.evt.screenY,
      clientX: e.evt.clientX, //The coordinates within the viewport
      clientY: e.evt.clientY,
    })
    let array = this.state.zombies
    array.push({
      x: x,
      y: y,
      id: id
    })
    this.setState({
      zombies: array
    }) 
  }
  render() {
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    // console.log(this.state.zombies)
    return (
      <div className="map" style={{ position: "relative", }}>
        <Stage width={550} height={550}>
          <Layer>
            <Player canvasWidth={550} canvasHeight={550}></Player>
            <ColoredRect innerRef={this.rect} gp={this.props.parent} handleClick={this.handleClick}/>
            { this.state.zombies.map((zData, index) => {
              // console.log(zData)
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
    color: "green",
    width: 50,
    height: 50
  };

  render() {
    // console.log('ye rects')
    return (
      <Circle
        x={this.props.x}
        y={this.props.y}
        width={this.state.width}
        height={this.state.height}
        opacity="0.5"
        fill={this.state.color}
        shadowBlur={5}
        ref={this.props.innerRef}
      />
    );
  }
}

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 50,
      height: 50,
      color: "lightblue"
    }
  }
  render() {
    return (
      <Circle
        x={this.props.canvasWidth / 2}
        y={this.props.canvasWidth / 2}
        width={this.state.width}
        height={this.state.height}
        opacity="0.5"
        fill={this.state.color}
        shadowBlur={5}
        ref={this.props.innerRef}
      />
    );
  }
}

function simulate(target, options) {
  // console.log("target")
  var event = target.ownerDocument.createEvent('MouseEvents'),
      options = options || {},
      opts = { // These are the default values, set up for un-modified left clicks
        type: 'click',
        canBubble: true,
        cancelable: true,
        view: target.ownerDocument.defaultView,
        detail: 1,
        screenX: 0, //The coordinates within the entire page
        screenY: 0,
        clientX: 0, //The coordinates within the viewport
        clientY: 0,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false, //I *think* 'meta' is 'Cmd/Apple' on Mac, and 'Windows key' on Win. Not sure, though!
        button: 0, //0 = left, 1 = middle, 2 = right
        relatedTarget: null,
      };

  //Merge the options with the defaults
  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      opts[key] = options[key];
    }
  }

  //Pass in the options
  event.initMouseEvent(
      opts.type,
      opts.canBubble,
      opts.cancelable,
      opts.view,
      opts.detail,
      opts.screenX,
      opts.screenY,
      opts.clientX,
      opts.clientY,
      opts.ctrlKey,
      opts.altKey,
      opts.shiftKey,
      opts.metaKey,
      opts.button,
      opts.relatedTarget
  );

  //Fire the event
  target.dispatchEvent(event);
}