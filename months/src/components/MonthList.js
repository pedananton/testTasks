import React from "react";
import { connect } from "react-redux";
import { Grid, Tooltip, Button } from "@material-ui/core";

function MonthList({ users, months, month }) {
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
          <Tooltip title={monthsCounted} placement="top-end">
            <Button>{monthsNamed}</Button>
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
