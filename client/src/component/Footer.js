import React from "react";
import { Typography, Grid } from "@material-ui/core";

export default function footer() {
  return (
    <div
      style={{
        clear: "both",
        position: "relative",
        height: "120px",
        backgroundColor: "#212121"
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <div
            style={{
              diplay: "block",
              textAlign: "center",
              marginTop: "50px",
              color: "#fff"
            }}
          >
            <Typography variant="body1">www.Luxury.com</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
