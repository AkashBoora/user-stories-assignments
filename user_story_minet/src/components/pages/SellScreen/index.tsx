import { Box, Grid, styled } from '@mui/material'
import React from 'react'
import IconComponent from '../../atoms/Icons'
import TypographyComponent from '../../atoms/Typography'
import Footer from '../../molecules/Footer'
import CheckoutCard from '../../organisms/CheckoutCard'
import ChooseCurrency from '../../organisms/ChooseCrypto'
import Header from '../../organisms/Header'
import PaymentAndDetailsCard from '../../organisms/PaymentAndDetailsCard'
import SideNavCompnent from '../../organisms/SideNav'
import HomeTemplate from '../../templates/HomeTemplate'
import AmountDetailsCardComponent from '../../organisms/AmountDetailsCard'
import USD from '../../../assets/icons/rupee.svg'

import { useCustomHook } from './hook'
import { pictures } from '../../../utils/constants'

const GridContainer = styled(Grid)(() => ({
  '& .MuiGrid-root': {
    padding: '0px',
  },
}))

const SellScreenPage = () => {
  const {
    cryptoCurrencies,
    cryptoCoin,
    price,
    balance,
    quantity,
    handleClcik,
    onChange,
    handleChangeCoin
  } = useCustomHook()

  let currenyName = cryptoCoin?.name as string
  let currencySymbol = cryptoCoin?.symbol as string
  let currencyIcon = cryptoCoin?.icon as string

  return (
    <HomeTemplate
      paddingTop="0px"
      header={<Header pageName={'Checkout'} />}
      footer={<Footer />}
      sideNav={<SideNavCompnent />}
      children={
        <Box data-testid='sellScreen'>
          <Grid container display={'flex'} justifyContent="space-between">
            <Grid item xs={7.5} padding="24px 24px 24px 0px">
              <Grid container direction={'column'} gap={3}>
                <Grid item gap={1.5} direction={'column'} display="flex">
                  <TypographyComponent
                    variant="subtitle1"
                    children="Sell crypto"
                  />
                  <Grid item>
                    <ChooseCurrency handleChangeCoin={handleChangeCoin} currenciesData={cryptoCurrencies} />
                  </Grid>
                </Grid>
                <Grid item>
                  <PaymentAndDetailsCard
                    variant="balance"
                    title={'Total Balance'}
                    icon={
                      <IconComponent
                        src={pictures[currencyIcon]}
                        width="32px"
                        height="32px"
                      />
                    }
                    balance={balance}
                    coinType={currenyName}
                    coinSymbol={currencySymbol}
                  />
                </Grid>
                <Grid item>
                  <AmountDetailsCardComponent
                    balance={balance}
                    price={price}
                    transactionType={'sell'}
                    coin={`${currenyName} ${currencySymbol}`}
                    handleChange={onChange}
                  />
                </Grid>
                <Grid item>
                  <PaymentAndDetailsCard
                    variant="deposit"
                    title={'Deposit to'}
                    icon={
                      <IconComponent src={USD} width="32px" height="32px" />
                    }
                    coinType={'USD Coin (cash)'}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <CheckoutCard
                type={'sell'}
                btcValue={quantity}
                price={price}
                onClick={handleClcik}
                coinSymbol={currencySymbol}
              />
            </Grid>
          </Grid>
        </Box>
      }
    />
  )
}

export default SellScreenPage
