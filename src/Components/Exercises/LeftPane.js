import React from "react";
import { Paper } from "@material-ui/core/";

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};
const LeftPane = () => {
  return <Paper style={style.Paper}>Jonathan</Paper>;
};

export default LeftPane;
