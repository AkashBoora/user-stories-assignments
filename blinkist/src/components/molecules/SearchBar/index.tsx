import { TextField } from "@mui/material";
import React from "react";
import Icon from "../../atoms/Icon";

const SearchBar = () => {
  const handleChange = () =>{

  }
  return (
    <div>
      <Icon src="search.png"/>
      <TextField placeholder="" onChange={handleChange}/>
    </div>
  );
};

export default SearchBar;
