import "./NumberButton.css";

function NumberButton({ number }) {
  return (
    <>
      <button className="numberButton">{number}</button>
    </>
  );
}

export default NumberButton;
