import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./appbar.styles.css";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

const NavBar = ({ inputdata, setInputData, clickHandler, locationFinder }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#0C134F" }}>
        <Toolbar>
          <Paper
            component="form"
            sx={{
              backgroundColor: "#d4adfc",
              display: "flex",
              alignItems: "center",
              width: 200,
              color: "#0C134F",
            }}
          >
            <InputBase
              size="small"
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Location"
              inputProps={{ "aria-label": "Search Location" }}
              value={inputdata}
              onChange={setInputData}
            />
            <IconButton
              onClick={clickHandler}
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
            >
              <SearchIcon sx={{ color: "#0C134F" }} />
            </IconButton>
          </Paper>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <WbSunnyIcon /> <WaterDropIcon /> Weather App <AcUnitIcon />{" "}
            <ThunderstormIcon />
          </Typography>
          <Button
            onClick={locationFinder}
            sx={{
              backgroundColor: "#D4ADFC",
              color: "#0C134F",
              ":hover": { bgcolor: "#5C469C", color: "#fff" },
            }}
            variant="contained"
            endIcon={<GpsFixedIcon />}
          >
            Find Me
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
