import React from "react";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Toolbar } from "@material-ui/core/";
import { Typography, IconButton } from "@material-ui/core/";

const Header = () => {
  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <IconButton className color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="headline" color="inherit" className="grow">
            Exercise Database
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
