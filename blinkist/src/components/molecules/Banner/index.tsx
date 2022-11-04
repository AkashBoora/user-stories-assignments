import { Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../../atoms/Image";

const Banner = () => {
  return (
    <Grid container>
      <Grid item>
        <Typography
          variant="h2"
          children="Which books should we  blink next?"
        />
      </Grid>
      <Grid item>
        <Image src="image.png" />
      </Grid>
    </Grid>
  );
};

export default Banner;
