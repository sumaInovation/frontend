import React from "react";
import { Grid, Typography } from "@mui/material";
const Cards = () => {
  return (
    <>
      <Grid container align="center">
        <Grid item xs={12}>
          <Typography variant="h3">Sumanga</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} md={4} xl={2}>
            Colum1
        </Grid>
        <Grid item xs={12} sm={6} lg={3} md={4}  xl={2}>
            Colum2
        </Grid>
        <Grid item xs={12} sm={6} lg={3} md={4}  xl={2}>
            Colum3
        </Grid>
        <Grid item xs={12} sm={6} lg={3} md={4}  xl={2}>
            Colum4
        </Grid>
      </Grid>
    </>
  );
};

export default Cards;
