import { styled } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'

interface IconComponentProps {
  width?: string
  height?: string
  padding?: string
  src: string
}

const StyledIcon = styled('img')((props: IconComponentProps) => ({
  height: props.height,
  width: props.width,
  padding: props.padding,
}))

const IconComponent = (props: IconComponentProps) => {
  const { src, width, height, padding } = props
  return (
    <div>
      <StyledIcon
        src={src}
        width={width}
        height={height}
        padding={padding}
        alt="icon"
        data-testid="iconComponent"
      />
    </div>
  )
}

export default IconComponent