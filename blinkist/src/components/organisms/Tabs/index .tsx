import React from "react";
import { Tabs as MuiTabs } from "@mui/material";

interface TabPanelProps {
  data: string[];
}

const Tabs = ({ data }: TabPanelProps) => {
  const handleTabChange = (event: any) => {};
  return (
    <MuiTabs value={data[0]} onChange={(event) => handleTabChange(event)}>
      {/* Map tab data */}
    </MuiTabs>
  );
};

export default Tabs;
