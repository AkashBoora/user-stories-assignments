import { Box, styled, Container, Grid } from '@mui/material'
import React from 'react'
import ImageComponent from '../../atoms/image'
import TypographyComponent from '../../atoms/Typography'
import CardTemplate from '../../templates/cardTemplate'
import Partition from '../../../assets/images/partition.svg'
import LeftArrow from '../../../assets/icons/buleLeftArrow.svg'
import GridBlue from '../../../assets/icons/gridBlue.svg'
import List from '../../../assets/icons/list.svg'
import Edit from '../../../assets/icons/blueEdit.svg'
import theme from '../../../theme'
import IconComponent from '../../atoms/icons'
import WatchlistCard from '../../molecules/WatchListCard'
import { WatchlistDataProps } from '../../../utils/types'
import { Link , NavLink } from 'react-router-dom'
import { pictures } from '../../../utils/constants'

interface WatchListComponentProps {
  cardsData: WatchlistDataProps[]
}

interface StyledBoxProp {
  gap?: string
  cursor?: boolean
}

const StyledBox = styled(Box)((props: StyledBoxProp) => ({
  display: 'flex',
  alignItems: 'center',
  gap: props.gap ? props.gap : '12px',
  cursor: props.cursor ? 'pointer' : '',
}))

const OuterBox = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  flexBasis: '100%',
  paddingLeft: '0px !important',
  paddingRight: '0px !important',
  paddingBottom: '26px',
})

const WatchList = (props: WatchListComponentProps) => {
  const { cardsData } = props
  let len = cardsData.length
  const lastIndex = len % 2 === 0 ? len : len - 1

  return (
    <OuterBox data-testid="watchlist">
      <Grid container>
        <Grid item paddingBottom={'14px'} xs={12}>
          <Grid container direction="row">
            <Grid item xs={6}>
              <StyledBox>
                <TypographyComponent variant="subtitle1">
                  Watchlist
                </TypographyComponent>
                <ImageComponent src={Partition} height="auto" width="auto" />
                <Link to="/trade" style={{ textDecoration: 'none' }}>
                  <StyledBox gap="9px" cursor={true} data-testid='discover-assets-button'>
                    <TypographyComponent
                      variant="caption1"
                      style={{
                        color: theme.palette.primary
                          ? theme.palette.primary.primary500
                          : 'red',
                        fontWeight: 500,
                      }}
                    >
                      Discover assets
                    </TypographyComponent>
                    <IconComponent
                      src={LeftArrow}
                      height="9px"
                      width="6px"
                      padding="0 0 1px 0 !important"
                    />
                  </StyledBox>
                </Link>
              </StyledBox>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent={'end'}>
              <StyledBox>
                <StyledBox gap="7px" cursor={true}>
                  <TypographyComponent
                    variant="caption1"
                    style={{
                      color: theme.palette.primary
                        ? theme.palette.primary.primary500
                        : 'red',
                      fontWeight: 500,
                    }}
                  >
                    EDIT
                  </TypographyComponent>
                  <IconComponent src={Edit} height="11px" width="11px" />
                </StyledBox>
                <ImageComponent src={Partition} height="auto" width="auto" />
                <ImageComponent src={GridBlue} height="auto" width="auto" />
                <IconComponent
                  src={List}
                  height="auto"
                  width="auto"
                  padding="2.5px 0 0 0 !important"
                />
              </StyledBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            spacing={2}
            data-testid="longCard-watchlist"
          >
            {cardsData.slice(0, lastIndex).map((value) => {
              return (
                <Grid item xs={6} data-testid='watchlist-coin-card'>
                  <NavLink
                    to={'/currencyDetails'}
                    style={{ textDecoration: 'none' }}
                    state={{ id: `${value.id}` }}
                  >
                    <CardTemplate
                      LeftComponet={
                        <WatchlistCard
                          image={pictures[value.image]}
                          name={value.name}
                          symbol={value.symbol.toUpperCase()}
                          change={value.change}
                        />
                      }
                      cardWidth="100%"
                      cardHeight="130px"
                      cardPadding="0"
                    />
                  </NavLink>
                </Grid>
              )
            })}
            <Grid item xs={12} data-testid='watchlist-coin-card'>
              {len % 2 !== 0 && (
                <NavLink
                  to={'/currencyDetails'}
                  style={{ textDecoration: 'none' }}
                  state={{ id: `${cardsData[lastIndex].id}` }}
                >
                  <CardTemplate
                    LeftComponet={
                      <WatchlistCard
                        image={pictures[cardsData[lastIndex].image]}
                        name={cardsData[lastIndex].name}
                        symbol={cardsData[lastIndex].symbol.toUpperCase()}
                        change={cardsData[lastIndex].change}
                      />
                    }
                    cardWidth={'100%'}
                    cardHeight="130px"
                    cardPadding="0"
                  />
                </NavLink>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </OuterBox>
  )
}

export default WatchList
