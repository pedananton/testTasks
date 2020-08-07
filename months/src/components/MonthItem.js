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

function MonthItem({ monthTarget }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>{monthTarget}
      
      {/* <Grid container justify="center">
        <Grid item>
          <Tooltip title={month} placement="top-end">
            <Button>{month}</Button>
          </Tooltip>
        </Grid>
      </Grid> */}
    </div>
  );
}

export default MonthItem;