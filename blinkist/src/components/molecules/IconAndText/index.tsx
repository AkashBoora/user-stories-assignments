import { Typography } from "@mui/material";
import React from "react";
import Icon from "../../atoms/Icon";

interface IconAndTextProps {
  icon: string;
  text: string;
}

const IconAndText = ({ icon, text }: IconAndTextProps) => {
  return (
    <div>
      <Icon src={icon} />
      <Typography variant={"subtitle1"} children={text} />
    </div>
  );
};

export default IconAndText;
