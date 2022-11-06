import React from 'react'
import { Grid, styled } from '@mui/material'
import IconWithTypography from '../IconWithTypography'
import Graph from '../WatchListGraph'
import Chip from '../../atoms/ChipItem/index'

type IpropTypes = {
  image: string
  name: string
  symbol: string
  change: number
  handleClick?: () => void
}

const StyledGrid = styled(Grid)({
  height: '130px',
  width: '100%',
  //  border: `1px solid ${theme.palette.greyColors.grey100}`,
  cursor: 'pointer',
})

const StyledContainer = styled('div')({
  paddingLeft: '2.56rem',
  paddingTop: '1.1rem',
})

const StyledGridItem = styled(Grid)({
  padding: '1.4rem',
})

const WatchlistCard: React.FC<IpropTypes> = (props) => {
  const { image, name, symbol, handleClick } = props
  const change = props.change>=0 ? `+${props.change}` : `${props.change}`
  return (
    <StyledGrid container onClick={handleClick} data-testid='watchlist-card'>
      <StyledGridItem item container xs={4} direction="column">
        <Grid item>
          <IconWithTypography
            image={image}
            text={name}
            subText={symbol}
            imageHeight="42px"
            imageWidth="42px"
            textVariant="body1"
            textColor="textColor.highEmphasis"
            subTextVariant="overline"
            subTextColor="textColor.mediumEmphasis"
          />
        </Grid>
        <Grid item>
          <StyledContainer>
            <Chip label="24 h" chipvariant="light" chiptype="rounded" />
          </StyledContainer>
        </Grid>
      </StyledGridItem>
      <StyledGridItem item xs={8} width='100%' display='flex' justifyContent='end'>
          <Graph plValue={change} profit={props.change >= 0} height="100" width='100%'/>
      </StyledGridItem>
    </StyledGrid>
  )
}

export default WatchlistCard
