import { Grid } from '@mui/material'
import React from 'react'
import Footer from '../../molecules/Footer'
import CurrencyDetailCardComponent from '../../organisms/CurrencyDetailCard'
import Header from '../../organisms/Header'
import SideNavCompnent from '../../organisms/SideNav'
import HomeTemplate from '../../templates/HomeTemplate'
import TabsComponent from '../../organisms/Tabs'
import { useHooks } from './hook'
import { useLocation } from 'react-router-dom'
import { pictures } from '../../../utils/constants'

interface LocationState{
  id:string
}

const CurrencyDetailScreen = () => {
  const location = useLocation()
  let tempValue = 'bitcoin'
  if (location.state !== null) {
    const { id } = location.state as LocationState
    tempValue = id
  }
  const {
    cryptoCurrency,
    isAddedToWatchList,
    handleClick,
    walletData,
    graphData,
    categories,
  } = useHooks(tempValue)
  return (
    <HomeTemplate
      header={<Header pageName="Trade" />}
      sideNav={<SideNavCompnent />}
      footer={<Footer />}
      paddingTop={'24px'}
      children={
        <Grid
          width={'100%'}
          container
          display={'flex'}
          flexDirection="column"
          gap={'12px'}
          data-testid='currencyDetails'
          paddingRight={'23px'}
        >
          <CurrencyDetailCardComponent
            coinIcon={pictures[cryptoCurrency?.icon]}
            coinName={cryptoCurrency?.name}
            coinSymbol={cryptoCurrency?.symbol}
            percentageChange={cryptoCurrency?.priceChangeIn1hr}
            isAddedtoWishList={isAddedToWatchList}
            marketCap={cryptoCurrency?.marketCap}
            volumeIn24H={cryptoCurrency?.volume}
            circulatingSupply={cryptoCurrency?.availableSupply}
            handleClickForWatchListButton={handleClick}
          />
          <TabsComponent
            coinName={cryptoCurrency?.name}
            investedAmount={walletData?.investedAmount}
            currencyData={graphData}
            percentageChange={cryptoCurrency?.priceChangeIn1month}
            categories={categories}
            coinBalance={walletData?.balance}
            currentValue={cryptoCurrency?.price}
          />
        </Grid>
      }
    />
  )
}

export default CurrencyDetailScreen
