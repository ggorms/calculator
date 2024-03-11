import "./BottomPanelButtons.css";

function BottomPanelButtons({ button }) {
  return (
    <>
      <button
        className={
          button === "=" ? "bottomPanelButton equals" : "bottomPanelButton"
        }
      >
        {button}
      </button>
    </>
  );
}

export default BottomPanelButtons;
