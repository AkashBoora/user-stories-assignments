import { Grid, styled } from '@mui/material'
import React from 'react'
import ValueChane from '../ValueChangeTypography/index'
import IconWithTypo from '../iconWithTypography/index'
import theme from '../../../theme/index'
interface IPortfolioProps {
  image: string
  name: string
  symbol: string
  value: number
  change: number
  handleClick?: () => void
}

const CustomBox = styled('div')({
  float: 'right',
})
const CustomGrid = styled(Grid)({
  cursor: 'pointer',
})

const PortfolioCard: React.FC<IPortfolioProps> = (props) => {
  const { image, name, symbol, change, handleClick } = props
  const value = Intl.NumberFormat('en-US').format(props.value)
  return (
    <CustomGrid container data-testid={symbol} onClick={handleClick}>
      <Grid item xs={6}>
        <IconWithTypo
          image={image}
          text={name}
          subText={symbol}
          imageHeight="42px"
          imageWidth="42px"
          textVariant="body1"
          textColor="#343446"
          iconandtextgap="10px"
          subTextVariant="caption2"
          subTextColor="#7D7D89"
        />
      </Grid>

      <Grid item xs={6}>
        <CustomBox>
          <ValueChane
            topText={`$${value}`}
            bottomText={
              change >= 0
                ? `+${change.toPrecision(3)}%`
                : `${change.toPrecision(3)}%`
            }
            topTextColor="textColor.highEmphasis"
            bottomTextColor={
              change >= 0
                ? `${theme.palette.profit.borderColor}`
                : `${theme.palette.loss.borderColor}`
            }
          />
        </CustomBox>
      </Grid>
    </CustomGrid>
  )
}

export default PortfolioCard
