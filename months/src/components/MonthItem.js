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

function MonthItem({ month, monthFiltered }) {
  const classes = useStyles();
  const handleBoxToggle = () => {
    console.log("MonthItem-mouse-over", monthFiltered);
  };
  return (
    <div onMouseEnter={handleBoxToggle} className={classes.root}>
      <Grid container justify="center">
        <Grid item>
          <Tooltip
            //title={monthTarget}
            placement="top-end"
          >
            <Button>{month}</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
}

export default MonthItem;
