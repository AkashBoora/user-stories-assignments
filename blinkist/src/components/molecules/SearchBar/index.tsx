import { TextField } from "@mui/material";
import React from "react";
import Icon from "../../atoms/Icon";

interface SearchBarProps {
  handleChange: (arg: any) => void;
}

const SearchBar = ({ handleChange }: SearchBarProps) => {
  return (
    <div>
      <Icon src="search.png" />
      <TextField placeholder="" onChange={(value) => handleChange(value)} />
    </div>
  );
};

export default SearchBar;
