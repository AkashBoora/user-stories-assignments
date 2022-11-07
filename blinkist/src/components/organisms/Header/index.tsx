import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Icon from "../../atoms/Icon";
import Image from "../../atoms/Image";
import ExtendedNav from "../../molecules/ExtendedNav";
import IconAndText from "../../molecules/IconAndText";
import SearchBar from "../../molecules/SearchBar";

const Header = () => {
  const [showSearchBar, setSearchBar] = useState(false);
  const [showExploreMenu, setShowExploremenu] = useState(false);
  const handleSearchBarChange = () => {};
  const handleExploreMenuChange = () => {};

  return (
    <div>
      <Grid container>
        <Grid item>
          <Grid item>
            <Image src="logo.png" />
            <Icon src="search.png" />
            <IconAndText text="Explore" icon="arrow.svg"/>
            <Typography children="My Library" variant="body1" />
            <Typography children="Highlights" variant="body1" />
          </Grid>
          <Grid item>
            <IconAndText text="account" icon="arrow.svg" />
          </Grid>
        </Grid>
        <Grid item>
          {/*conditional rendering using show search bar setSearchBar*/}
          <SearchBar handleChange={handleSearchBarChange} />
          <ExtendedNav />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
