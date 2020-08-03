import React from "react";
import MonthItem from "./MonthItem";
import { connect } from "react-redux";

function MonthList({ users, months, monthFiltered }) {
  return (
    <div>
      {users.map((user) => (
        <MonthItem user={months} key={user.id} />
      ))}
      MonthList
    </div>
  );
}

function mapStateToProps(state) {
  const months = state.users.map((user) => user.dob[5] + user.dob[6]+',');
  const monthFiltered = console.log(months.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  },[]))

  console.log(months);
  return {
    users: state.users,
    months,
    monthFiltered,
  }
}

export default connect(mapStateToProps)(MonthList);
