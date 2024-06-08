import { Login } from "@mui/icons-material";
import { Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import React from "react";
import { Link } from "react-router-dom";

const styles = {
  color: "white",
  margin: ".5rem",
  textDecoration: "none",
};

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" mr={"auto"} textTransform={"uppercase"} >
          Lang go.
        </Typography>
        <Link to={"/"} style={styles}>
          Home
        </Link>
        <Link to={"/login"} style={styles}>
          <Login sx={{fontSize:30}}/>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
