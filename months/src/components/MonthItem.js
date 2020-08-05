import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function MonthItem({ user, users }) {
  const classes = useStyles();

  const months = users.map((user) =>
    new Date(user.dob).toLocaleString("default", { month: "long" })
  );

  const monthsList = Array.from(new Set(months));

  const month = new Date(user.dob).toLocaleString("default", { month: "long" });

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item>
          <Tooltip title="{users}" placement="top-end">
            <Button>{month}</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
}

export default MonthItem;
