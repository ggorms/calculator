import "./NumberButton.css";
// import { useEffect } from "react";

function NumberButton({ number, output, setOutput }) {
  // useEffect(() => {
  //   console.log(outPut);
  // }, [outPut]);
  // console.log("buttons", output);
  const handleNumberClick = () => {
    if (output.operator === "") {
      if (output.num1 === "0" || output.equated === true) {
        setOutput({ ...output, num1: number, equated: false });
      } else {
        setOutput({ ...output, num1: output.num1 + number });
      }
    } else {
      if (output.num2 === "0") {
        setOutput({ ...output, num2: number });
      } else {
        setOutput({ ...output, num2: output.num2 + number });
      }
    }
  };

  return (
    <>
      <button className="numberButton" onClick={handleNumberClick}>
        {number}
      </button>
    </>
  );
}

export default NumberButton;
