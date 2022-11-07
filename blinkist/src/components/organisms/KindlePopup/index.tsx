import { MenuItem, Modal, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface KindlePopupProps {
  isActive: boolean;
}

const KindlePopup = ({ isActive }: KindlePopupProps) => {
  return (
    <Modal open={isActive}>
      <Box>
        {/* typography components */}
        <TextField placeholder={"email"} />
        <Select placeholder={"email"}>
          {/*list of menu items*/}
          <MenuItem></MenuItem>
        </Select>
        {/* Buttons */}
      </Box>
    </Modal>
  );
};

export default KindlePopup;
