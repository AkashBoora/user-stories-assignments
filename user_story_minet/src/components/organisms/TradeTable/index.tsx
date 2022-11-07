import {
  TableContainer,
  styled,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Grid,
} from '@mui/material'
import Switch from '../../../assets/icons/switch.svg'
import IconComponent from '../../atoms/icons'
import TypographyComponent from '../../atoms/Typography'
import theme from '../../../theme/index'
import IconWithTypography from '../../molecules/iconWithTypography'
import selectedStar from '../../../assets/icons/filledStar.svg'
import unselectedStar from '../../../assets/icons/emptyStar.svg'
import {
  coinTypes,
  CryptoCurrency,
  timeProps,
} from '../../../utils/types'
import { useCoinDataHook, useWatchlistHook } from './hooks'
import { pictures } from '../../../utils/constants'
import { NavLink } from 'react-router-dom'
interface TradeTableProps {
  timePeriod: timeProps
  filterValue: string
}

const StyledTable = styled(Table)({
  minWidth: '1238px',
  borderCollapse: 'separate',
  borderSpacing: '0px 12px',
  '& .MuiTable-root': {
    border: 'transparent',
  },
})

const StyledIconComponent = styled(IconComponent)({
  paddingBottom: '18px',
})

const StyledTableHead = styled(TableHead)({
  height: '42px',
})

const FirstTableCell = styled(TableCell)({
  borderLeft: `1px solid ${theme.palette.greyColors.grey100}`,
  borderTop: `1px solid ${theme.palette.greyColors.grey100}`,
  borderBottom: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRadius: '4px',
  backgroundColor: theme.palette.structural.main,
})

const MidTableCell = styled(TableCell)({
  borderTop: `1px solid ${theme.palette.greyColors.grey100}`,
  borderBottom: `1px solid ${theme.palette.greyColors.grey100}`,
  backgroundColor: theme.palette.structural.main,
})

const LastTableCell = styled(TableCell)({
  borderRight: `1px solid ${theme.palette.greyColors.grey100}`,
  borderTop: `1px solid ${theme.palette.greyColors.grey100}`,
  borderBottom: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRadius: '4px',
  backgroundColor: theme.palette.structural.main,
})

const NameTableCell = styled(TableCell)({
  borderBottom: 'none',
  paddingBottom: '0px',
  width: '300px',
})

const PriceTableCell = styled(TableCell)({
  borderBottom: 'none',
  paddingBottom: '0px',
  width: '337px',
})

const ChangeAndMarketCapTableCell = styled(TableCell)({
  borderBottom: 'none',
  paddingBottom: '0px',
  width: '237px',
})

const WatchTableCell = styled(TableCell)({
  borderBottom: 'none',
  paddingBottom: '0px',
  width: '78px',
})

const renderTypography = (children: string) => {
  return (
    <TypographyComponent
      variant="caption1"
      children={children}
      color={theme.palette.greyColors.grey500}
    />
  )
}

const TradeTable: React.FC<TradeTableProps> = ({ timePeriod, filterValue }) => {
  const { coinData, handleMarketCapClick } = useCoinDataHook(filterValue)
  const { watchlistData, handleWatchlistDelete, handleWatchlistInsert} = useWatchlistHook()

  const MarketCapRightGrid = styled(Grid)({
    height: '10px',
    width: '13px',
  })

  const StyledIconButton = styled(IconButton)({
    padding: '0px 0px 6px 0px',
    height: '10px',
    width: '13px',
  })

  const renderMarketCap = () => {
    return (
      <Grid container direction="row" spacing={'12px'}>
        <Grid item>{renderTypography('Market Cap')}</Grid>
        <MarketCapRightGrid item>
          <StyledIconButton
            onClick={() => handleMarketCapClick()}
            data-testid="market-cap-button"
          >
            <StyledIconComponent src={Switch} width={'13px'} height={'10px'} />
          </StyledIconButton>
        </MarketCapRightGrid>
      </Grid>
    )
  }

  const getPriceChange = (coin: CryptoCurrency) => {
    const priceChangeValues = {
      '1h': coin.priceChangeIn1hr,
      '24h': coin.priceChangeIn24hrs,
      '1w': coin.priceChangeIn1week,
      '1m': coin.priceChangeIn1month,
      '1y': coin.priceChangeIn1year
    }

    return priceChangeValues[timePeriod]
  }

  return (
    <TableContainer data-testid="trade-table">
      <StyledTable>
        <StyledTableHead>
          <TableRow>
            <NameTableCell>{renderTypography('Name')}</NameTableCell>
            <PriceTableCell>{renderTypography('Price')}</PriceTableCell>
            <ChangeAndMarketCapTableCell>
              {renderTypography('Change')}
            </ChangeAndMarketCapTableCell>
            <ChangeAndMarketCapTableCell>
              {renderMarketCap()}
            </ChangeAndMarketCapTableCell>
            <WatchTableCell>{renderTypography('Watch')}</WatchTableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {coinData.map((coin) => {
            let priceChange = getPriceChange(coin)
            const isPresent = watchlistData.includes(coin.id)
            return (
              <TableRow data-testid={'table-row'}>
                <FirstTableCell>
                <NavLink
                    to={'/currencyDetails'}
                    style={{ textDecoration: 'none' }}
                    state={{ id: `${coin.id}` }}
                  >
                  <IconWithTypography
                    image={pictures[coin.icon]}
                    imageHeight={'42px'}
                    imageWidth={'42px'}
                    text={coin.name}
                    textVariant={'body1'}
                    textColor={theme.palette.textColor.highEmphasis}
                    subText={coin.symbol.toUpperCase()}
                    subTextVariant={'overline'}
                    subTextColor={theme.palette.textColor.mediumEmphasis}
                  />
                </NavLink>
                </FirstTableCell>
                <MidTableCell>
                  <TypographyComponent
                    variant={'body2'}
                    children={`$${coin.price.toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}`}
                  />
                </MidTableCell>
                <MidTableCell data-testid={`price-change-${coin.id}`}>
                  <TypographyComponent
                    variant={'body2'}
                    children={
                      priceChange > 0
                        ? `+${priceChange.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}%`
                        : `${priceChange.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}%`
                    }
                    color={
                      priceChange > 0
                        ? theme.palette.primary.success500
                        : theme.palette.loss.borderColor
                    }
                  />
                </MidTableCell>
                <MidTableCell>
                  <TypographyComponent
                    variant={'body2'}
                    children={Intl.NumberFormat('en-US', {
                      notation: 'compact',
                      maximumFractionDigits: 1,
                    }).format(coin.marketCap)}
                    color={theme.palette.textColor.highEmphasis}
                  />
                </MidTableCell>
                <LastTableCell>
                  {isPresent ? (
                    <IconButton
                      onClick={() =>
                        handleWatchlistDelete(coin.id as coinTypes)
                      }
                      data-testid="selected-watch"
                    >
                      <IconComponent
                        src={selectedStar}
                        height={'19px'}
                        width={'18px'}
                      />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() =>
                        handleWatchlistInsert(coin.id as coinTypes)
                      }
                      data-testid="unselected-watch"
                    >
                      <IconComponent
                        src={unselectedStar}
                        height={'19px'}
                        width={'18px'}
                      />
                    </IconButton>
                  )}
                </LastTableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}

export default TradeTable
