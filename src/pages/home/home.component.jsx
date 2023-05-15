import React from "react";
import "./home.styles.css";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Box from "@mui/material/Box";

const Home = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "aliceblue",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "92vh",
        }}
      >
        <Card sx={{ minWidth: 275, maxWidth: 400 }}>
          <CardContent>
            <h1 className="text-heading">Start Searching your location!</h1>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Home;
