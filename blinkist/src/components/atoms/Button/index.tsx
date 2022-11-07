import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

interface ButtonProps extends MuiButtonProps {
}

const Button = ({
  children,
  variant,
  color,
  onClick,
}: ButtonProps) => {
  return (
    <div>
      <MuiButton
        variant={variant}
        color={color}
        onClick={onClick}
      >
        {children}
      </MuiButton>
    </div>
  );
};

export default Button;
