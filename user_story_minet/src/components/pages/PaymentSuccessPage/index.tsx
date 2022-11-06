import { Box } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../../molecules/Footer'
import Header from '../../organisms/Header'
import SideNavCompnent from '../../organisms/SideNav'
import TransactionSuccess from '../../organisms/transactionSuccess'
import HomeTemplate from '../../templates/HomeTemplate'

interface LocationState{
  quantity:number
  transactionType: 'buy' | 'sell'
  currencySymbol?: string
}
//Payment Success page for both buy and sell
const PaymentSuccessPage = () => {
  const location = useLocation();
const { quantity,transactionType,currencySymbol } = location.state as LocationState ;

  return (
    <div>
      <HomeTemplate
        header={<Header pageName={'Checkout'} />}
        sideNav={<SideNavCompnent />}
        footer={<Footer />}
        children={
          <Box paddingX={75} paddingY={26}>
            <TransactionSuccess successType={transactionType} price={`${quantity} ${currencySymbol? currencySymbol:"BTC"}`} />
          </Box>
        }
      />
    </div>
  )
}

export default PaymentSuccessPage
