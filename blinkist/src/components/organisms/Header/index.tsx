import { Grid, Typography } from "@mui/material";
import React from "react";
import Icon from "../../atoms/Icon";
import Image from "../../atoms/Image";
import ExtendedNav from "../../molecules/ExtendedNav";
import IconAndText from "../../molecules/IconAndText";

const Header = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <Grid item>
            <Image src="logo.png" />
            <Icon src="search.png" />
            <IconAndText text="Explore" icon="arrow.svg" />
            <Typography children="My Library" variant="body1" />
            <Typography children="Highlights" variant="body1" />
          </Grid>
          <Grid item>
            <IconAndText text="account" icon="arrow.svg" />
          </Grid>
        </Grid>
        <Grid item>
          <ExtendedNav/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
