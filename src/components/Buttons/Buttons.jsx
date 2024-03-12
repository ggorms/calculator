import "./Buttons.css";
import NumberButton from "../NumberButton/NumberButton";
import BottomPanelButtons from "../BottomPanelButtons/BottomPanelButtons";
import RightPanelButtons from "../RightPanelButtons/RightPanelButtons";

function Buttons({ output, setOutput, calculate }) {
  const numberButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const rightPanelButtons = ["/", "x", "-", "+"];
  const bottomPanelButtons = ["0", ".", "="];

  return (
    <div className="buttonsContainer">
      <div className="panelGroup">
        <div className="numberButtons">
          {numberButtons.map((button) => (
            <NumberButton
              key={button}
              number={button}
              output={output}
              setOutput={setOutput}
            />
          ))}
        </div>
        <div className="buttonPanelBottom">
          {bottomPanelButtons.map((button, i) => (
            <BottomPanelButtons
              key={i}
              button={button}
              output={output}
              setOutput={setOutput}
              calculate={calculate}
            />
          ))}
        </div>
      </div>
      <div className="buttonPanelRight">
        {rightPanelButtons.map((button, i) => (
          <RightPanelButtons
            key={i}
            button={button}
            output={output}
            setOutput={setOutput}
            calculate={calculate}
          />
        ))}
      </div>
    </div>
  );
}

export default Buttons;
