import React from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import "./weather.styles.css";

const Weather = ({ data }) => {
  return (
    <div className={`weather ${data.current.is_day == 0 ? "night" : "day"}`}>
      <h1 className="heading">{data.location.name}</h1>
      <p style={{ color: "grey" }}>
        {data.location.region}, {data.location.country}
      </p>
      <Box
        sx={{
          p: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={5}>
          <Grid xs={12} md={4} lg={4}>
            <Card sx={{ width: "300px" }}>
              <CardContent>
                <h3>Current Temperate</h3>
                <h3>{data.current.temp_c} °c</h3>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4} lg={4}>
            <Card sx={{ width: "300px" }}>
              <CardContent>
                <h3>Feels Like</h3>
                <h3>{data.current.feelslike_c} °c</h3>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4} lg={4}>
            <Card sx={{ width: "300px" }}>
              <CardContent>
                <h3>Humidity</h3>
                <h3>{data.current.humidity}</h3>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Weather;
