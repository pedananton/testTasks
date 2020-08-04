import React from "react";

function MonthItem({ month }) {
  //debugger
  function handleBoxToggle() {
    console.log("MonthItem-mouse-over");
  }
  return <div onMouseEnter={handleBoxToggle}>{month}</div>;
}

export default MonthItem;
