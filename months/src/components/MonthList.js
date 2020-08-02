import React from "react";
import MonthItem from "./MonthItem";
import { connect } from "react-redux";

function MonthList({ users, months, monthFiltered }) {
  return (
    <div>
      {users.map((user) => (
        <MonthItem user={monthFiltered} key={user.id} />
      ))}
      MonthList
    </div>
  );
}

function mapStateToProps(state) {
  const months = state.users.map((user) => user.dob[5] + user.dob[6] );
  console.log(months)
  return {
    users: state.users,
    monthFiltered: months.filter((a, b) => +a === +b).length,
  };
}

export default connect(mapStateToProps)(MonthList);
