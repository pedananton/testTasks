import React from "react";
import MonthItem from "./MonthItem";
import { connect } from "react-redux";

function MonthList({ months, monthsList }) {
  //debugger
  return (
    <div>
      {monthsList.map((month) => (
        <MonthItem
          month={month}
          key={month.id}
          //log={console.log("MonthList-render", months)}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  const months = state.users.map(
    //(user) => user.dob[5].replace(/^0+/, "") + user.dob[6]
    (user) => new Date(user.dob).toLocaleString("default", { month: "long" })
  );
  console.log("MonthList-mapStateToProps", months);

  const monthsList = Array.from(new Set(months));
  const monthFiltered = months.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, []);

  //console.log("MonthList-mapStateToProps", monthFiltered);
  return {
    users: state.users,
    months,
    monthFiltered,
    monthsList,
  };
}

export default connect(mapStateToProps)(MonthList);
