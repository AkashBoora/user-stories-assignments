import { Box, Grid } from '@mui/material'
import IconComponent from '../../atoms/Icons'
import TypographyComponent from '../../atoms/Typography'
import Footer from '../../molecules/Footer'
import AmountDetailsCardComponent from '../../organisms/AmountDetailsCard'
import CheckoutCard from '../../organisms/CheckoutCard'
import ChooseCurrency from '../../organisms/ChooseCrypto'
import Header from '../../organisms/Header'
import PaymentAndDetailsCard from '../../organisms/PaymentAndDetailsCard'
import SideNavCompnent from '../../organisms/SideNav'
import HomeTemplate from '../../templates/HomeTemplate'
import rupee from '../../../assets/icons/rupee.svg'
import DeliveryDropdown from '../../organisms/DeliveryDropdown'
import { usePurchaseCoin } from './hook'

const PurchasePage = () => {
  const {
    cryptoCurrency,
    balance,
    price,
    quantity,
    handleChange,
    handleClick,
    handleChangeCoin,
    coin
  } = usePurchaseCoin()

  let currenyName = coin?.name as string
  let currencySymbol = coin?.symbol as string

  return (
    <div data-testid="purchase-page">
      <HomeTemplate
        header={<Header pageName={'Checkout'} />}
        sideNav={<SideNavCompnent />}
        footer={<Footer />}
        children={
          <Box>
            <Grid container display={'flex'} justifyContent="space-between">
              <Grid item xs={7.5} sx={{paddingTop: '24px', paddingBottom: '24px'}}>
                <Grid container direction={'column'} gap={2}>
                  <Grid item>
                    <TypographyComponent
                      variant="subtitle1"
                      children="Buy crypto"
                    />
                  </Grid>
                  <Grid item>
                    <ChooseCurrency currenciesData={cryptoCurrency} handleChangeCoin={handleChangeCoin}/>
                  </Grid>
                  <Grid item>
                    <PaymentAndDetailsCard
                      variant="payment"
                      title={'Payment Method'}
                      icon={<IconComponent src={rupee} />}
                      balance={balance}
                      coinType={'USD Coin (cash)'}
                    />
                  </Grid>
                  <Grid item>
                    <AmountDetailsCardComponent
                      balance={balance}
                      price={price}
                      transactionType={'buy'}
                      coin={`${currenyName} ${currencySymbol}`}
                      handleChange={handleChange}
                    />
                  </Grid>
                  <Grid item>
                    <DeliveryDropdown
                      instantTime={'2-5'}
                      fee={'0.001'}
                      title={'Select speed delivery'}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <CheckoutCard
                  type={'buy'}
                  btcValue={parseFloat(quantity.toFixed(8))}
                  price={price}
                  onClick={handleClick}
                  coinSymbol={currencySymbol}
                />
              </Grid>
            </Grid>
          </Box>
        }
      />
    </div>
  )
}

export default PurchasePage
