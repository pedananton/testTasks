import React from "react";
import { connect } from "react-redux";
import { Grid, Tooltip, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function MonthList({ users, months, month, user }) {
  const classes = useStyles();
  const monthsCounted = months.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, []);

  const monthsNamed = new Date(month).toLocaleString("default", {
    month: "long",
  });

  let getStyles =
    monthsCounted[month] > 0 && monthsCounted[month] < 2
      ? "gree"
      : monthsCounted[month] > 3 && monthsCounted[month] < 6
      ? "primary"
      : monthsCounted[month] > 7 && monthsCounted[month] < 10
      ? "green"
      : "secondary";

  return (
    <div>
      <Grid container justify="center" className={classes.root}>
        <Grid item>
          <Tooltip title={monthsCounted[month]} placement="top-end">
            <Button color={getStyles}>{monthsNamed}</Button>
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

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default connect(mapStateToProps)(MonthList);
