import React from "react";
import { connect } from "react-redux";
import { Grid, Tooltip, Button } from "@material-ui/core";

function MonthList({ users, months, month, user }) {
  const monthsCounted = months.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, []);

  const monthsNamed = new Date(month).toLocaleString("default", {
    month: "long",
  });

  return (
    <div>
      <Grid container justify="center">
        <Grid item>
          <Tooltip title={monthsCounted[month]} placement="top-end">
            <Button value={month}>{monthsNamed}</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps)(MonthList);
