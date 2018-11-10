import React from "react";
import { Grid, Paper } from "@material-ui/core/";

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

const Exercises = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs>
        <Paper style={style.Paper}>Jonathan</Paper>;
      </Grid>
      <Grid item xs>
        <Paper style={style.Paper}>Momperousse</Paper>;
      </Grid>
    </Grid>
  );
};

export default Exercises;
