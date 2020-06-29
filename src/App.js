import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LottoBall from "./LottoBall.js";
import Lottery from "./Lottery.js";

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mini Daily" maxNum={10} maxBalls={4} />
    </div>
  );
}

export default App;
