import { Box } from '@mui/material'
import React from 'react'
import Typography from './../../atoms/Typography/index'

interface ValueChangeTypographyComponentProps {
  topText: string
  bottomText: string
  topTextColor?: string
  bottomTextColor?: string
}

const ValueChangeTypographyComponent = (
  props: ValueChangeTypographyComponentProps
) => {
  const { topText, bottomText, topTextColor, bottomTextColor } = props
  return (
    <Box
      gap="4px"
      textAlign={'right'}
      display="flex"
      flexDirection= 'column'
      data-testid="valueChangeTypography"
    >
      <Typography
        variant="body1"
        color={topTextColor ? topTextColor : 'textColor.highEmphasis'}
        children={topText}
      />
      <Typography
        variant="caption2"
        color={bottomTextColor ? bottomTextColor : 'textColor.mediumEmphasis'}
        children={bottomText}
      />
    </Box>
  )
}

export default ValueChangeTypographyComponent
