import React, { Component } from "react";
import LottoBall from "./LottoBall";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40,
  };
  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.maxBalls }),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.generate();
  }
  generate() {
    this.setState((curState) => ({
      nums: curState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }
  render() {
    let ran = Math.floor(Math.random() * this.props.maxNum + 1);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((n) => (
            <LottoBall num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}

export default Lottery;

/*
    nums: [...Array(this.props.maxNum).keys()].map((n) => n + 1),
*/
