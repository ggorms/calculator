import "./Screen.css";

function Screen({ output }) {
  return (
    <div className="screenContainer">
      <div className="screen">
        <h3 className="output">
          {output.num2 === "0" ? output.num1 : output.num2}
        </h3>
      </div>
    </div>
  );
}

export default Screen;
