import "./ClearButton.css";

function ClearButton({ setOutput }) {
  return (
    <>
      <button
        className="clearButton"
        onClick={() => setOutput({ num1: "0", num2: "0", operator: "" })}
      >
        C
      </button>
    </>
  );
}

export default ClearButton;
