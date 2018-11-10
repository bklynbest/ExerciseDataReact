import React from "react";
import { Grid, Paper } from "@material-ui/core/";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const Exercises = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs>
        <LeftPane />
      </Grid>
      <Grid item xs>
        <RightPane />
      </Grid>
    </Grid>
  );
};

export default Exercises;
