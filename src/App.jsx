import CalculatorTop from "./components/CalculatorTop/CalculatorTop";
import Screen from "./components/Screen/Screen";
import Buttons from "./components/Buttons/Buttons";
import ClearButton from "./components/ClearButton/ClearButton";
import { useState } from "react";

import "./App.css";

function App() {
  const [output, setOutput] = useState({
    num1: "0",
    num2: "0",
    operator: "",
    equated: false,
  });

  const calculate = (button) => {
    if (output.operator === "+") {
      const result = Number(output.num1) + Number(output.num2);
      setOutput({
        num1: String(result),
        num2: "0",
        operator: button || "",
        equated: true,
      });
    } else if (output.operator === "-") {
      const result = Number(output.num1) - Number(output.num2);
      setOutput({
        num1: String(result),
        num2: "0",
        operator: button || "",
        equated: true,
      });
    } else if (output.operator === "x") {
      const result = Number(output.num1) * Number(output.num2);
      setOutput({
        num1: String(result),
        num2: "0",
        operator: button || "",
        equated: true,
      });
    } else if (output.operator === "/") {
      const result = Number(output.num1) / Number(output.num2);
      setOutput({
        num1: String(result),
        num2: "0",
        operator: button || "",
        equated: true,
      });
    }
  };

  // console.log("num1", output.num1);
  // console.log("operator", output.operator);
  console.log(output);
  return (
    <div className="calculatorBody">
      <CalculatorTop />
      <Screen output={output} />
      <ClearButton setOutput={setOutput} />
      <Buttons output={output} setOutput={setOutput} calculate={calculate} />
    </div>
  );
}

export default App;
