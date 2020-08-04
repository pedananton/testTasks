import React from "react";
import MonthItem from "./MonthItem";
import { connect } from "react-redux";

function MonthList({ monthFiltered }) {
  return (
    <div>
      {monthFiltered.map((month) => (
        <MonthItem
          month={month}
          key={Date.now()}
          log={console.log("MonthList-render", monthFiltered)}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  const months = state.users.map((user) => user.dob[5].replace(/^0+/, '') + user.dob[6]);
  const monthFiltered = months.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, []);

  console.log("MonthList-mapStateToProps", monthFiltered);
  return {
    users: state.users,
    months,
    monthFiltered,
  };
}

export default connect(mapStateToProps)(MonthList);
