import React, { useEffect } from "react";
import MonthList from "./MonthList";
import { connect } from "react-redux";
import { getMonths } from "../store/actions/index";

function Months({ getMonths, monthsList, user, months }) {
  useEffect(() => {
    getMonths();
  }, [getMonths]);

  return (
    <>
      <div>
        {monthsList.map((month) => (
          <MonthList month={month} key={Math.random()} months={months} user={user} />
        ))}
      </div>
    </>
  );
}

function mapStateToProps(state) {
  const user = state.users.find((user) => user.id);

  const months = state.users.map(
    (user) => user.dob[5].replace(/^0+/, "") + user.dob[6]
  );

  const monthsList = Array.from(new Set(months));

  return {
    users: state.users,
    monthsList,
    months,
    user,
  };
}

const mapDispatchToProps = {
  getMonths,
};

export default connect(mapStateToProps, mapDispatchToProps)(Months);
