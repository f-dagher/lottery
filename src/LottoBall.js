import React, { Component } from "react";
import "./LottoBall.css";

class LottoBall extends Component {
  render() {
    return <div className="LottoBall-ball">{this.props.num}</div>;
  }
}

export default LottoBall;
