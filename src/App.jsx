import CalculatorTop from "./components/CalculatorTop/CalculatorTop";
import Screen from "./components/Screen/Screen";
import Buttons from "./components/Buttons/Buttons";
import ClearButton from "./components/ClearButton/ClearButton";
import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="calculatorBody">
      <CalculatorTop />
      <Screen />
      <ClearButton />
      <Buttons />
    </div>
  );
}

export default App;
