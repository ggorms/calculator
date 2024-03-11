import "./CalulatorTop.css";

function CalculatorTop() {
  return (
    <div className="calculatorTop">
      <div className="brandName">
        {" "}
        <h2>Calculator</h2>
      </div>
      <div className="solarPanel">
        <div className="solarPanelComponent" id="first"></div>
        <div className="solarPanelComponent"></div>
        <div className="solarPanelComponent"></div>
        <div className="solarPanelComponent"></div>
        <div className="solarPanelComponent"></div>
        <div className="solarPanelComponent"></div>
      </div>
    </div>
  );
}

export default CalculatorTop;
