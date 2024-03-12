import "./BottomPanelButtons.css";

function BottomPanelButtons({ button, output, setOutput, calculate }) {
  const handleClick = () => {
    if (button !== "=") {
      if (output.operator === "") {
        if (output.num1 === "0" || output.equated === true) {
          setOutput({ ...output, num1: button, equated: false });
        } else {
          setOutput({ ...output, num1: output.num1 + button });
        }
      } else {
        if (output.num2 === "0") {
          setOutput({ ...output, num2: button });
        } else {
          setOutput({ ...output, num2: output.num2 + button });
        }
      }
    } else {
      calculate();
    }
  };

  return (
    <>
      <button
        className={
          button === "=" ? "bottomPanelButton equals" : "bottomPanelButton"
        }
        onClick={handleClick}
      >
        {button}
      </button>
    </>
  );
}

export default BottomPanelButtons;
