import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Footer = ({ muscles }) => {
  return (
    <Paper className="">
      <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
        <Tab label="All" />
        {muscles.map(group => (
          <Tab label={group} />
        ))}
      </Tabs>
    </Paper>
  );
};

export default Footer;
