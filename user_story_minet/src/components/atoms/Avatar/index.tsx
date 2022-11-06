import React from 'react'
import Avatar from '@mui/material/Avatar'
import Logo from '../../../assets/images/avatar.svg'

interface AvatarComponentProps{
    height:string;
    width:string;
}

const AvatarComponent = (props:AvatarComponentProps) => {
  return (
    <div>
      <Avatar
        alt="Avatar"
        src={Logo}
        sx={{ width: props.width, height: props.height }}
        data-testid="avatar"
      />
    </div>
  )
}

export default AvatarComponent
