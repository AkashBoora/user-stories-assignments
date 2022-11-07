import { LinearProgress } from "@mui/material";
import React from "react";

interface ProgressBarProps {
  value: number;
}

const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <div>
      <LinearProgress color="inherit" value={value} />
    </div>
  );
};

export default ProgressBar;
