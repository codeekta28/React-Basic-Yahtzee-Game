import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={()=>this.props.handleClick(this.props.idx)}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
