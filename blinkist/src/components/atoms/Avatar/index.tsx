import React from "react";
import MuiAvatar from '@mui/material/Avatar'

interface AvatarProps {
  src: string;
}

const Avatar = ({ src }: AvatarProps) => {
  return (
    <div>
      <MuiAvatar src={src}/>
    </div>
  );
};

export default Avatar;
