import React from "react";
import MonthItem from "./MonthItem";
import { connect } from "react-redux";

function MonthList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <MonthItem user={user} key={user.id} users={users} />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  const user = state.users.find((user) => user.id);

  return {
    users: state.users,
    user,
  };
}

export default connect(mapStateToProps)(MonthList);
