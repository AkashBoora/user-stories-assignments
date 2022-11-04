import React, { useState } from "react";
import { Tabs as MuiTabs } from "@mui/material";

interface TabPanelProps {
  data: string[];
}

const Tabs = ({ data }: TabPanelProps) => {
  const [activeTab, setActiveTab] = useState(data[0]);
  const handleTabChange = (event: any) => {
    setActiveTab(event.target.value);
  };
  return (
    <MuiTabs value={activeTab} onChange={(event) => handleTabChange(event)}>
      {/* Map tab data */}
    </MuiTabs>
  );
};

export default Tabs;
