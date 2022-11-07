import { styled } from "@mui/material";
import React from "react";

interface IconProps {
  width?: string;
  height?: string;
  padding?: string;
  src: string;
}

const StyledIcon = styled("img")((props: IconProps) => ({
  height: props.height,
  width: props.width,
  padding: props.padding,
}));
const Icon = ({ width, height, padding, src }: IconProps) => {
  return (
    <div>
      <StyledIcon src={src} width={width} height={height} padding={padding} />
    </div>
  );
};

export default Icon;
