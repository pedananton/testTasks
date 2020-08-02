import React, { useEffect } from "react";
import MonthList from "./MonthList";
import { connect } from "react-redux";
import { getMonths } from "../store/actions/index";

function Months({ getMonths }) {
  useEffect(() => {
    getMonths();
  }, [getMonths]);
  
  return (
    <div>
      <MonthList />
    </div>
  );
}

const mapDispatchToProps = {
  getMonths,
};

export default connect(null, mapDispatchToProps)(Months);
