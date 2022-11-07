import React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

const TypographyComponent = ({
  variant,
  children,
  ...props
}: TypographyProps) => {
  return (
    <Typography variant={variant} {...props}>
      {children}
    </Typography>
  );
};

export default TypographyComponent;
