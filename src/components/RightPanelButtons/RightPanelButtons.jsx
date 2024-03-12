import "./RightPanelButtons.css";

function RightPanelButtons({ button, output, setOutput, calculate }) {
  const handleOperatorClick = () => {
    if (output.operator === "") {
      setOutput({ ...output, operator: button });
    } else if (output.operator !== "" && output.num2 !== "0") {
      calculate(button);
    }
  };

  return (
    <>
      {button === "/" ? (
        <button className="rightPanelButton" onClick={handleOperatorClick}>
          &#xF7;
        </button>
      ) : (
        <button className="rightPanelButton" onClick={handleOperatorClick}>
          {button}
        </button>
      )}
    </>
  );
}

export default RightPanelButtons;
