import { Box, Grid, Stack, styled } from '@mui/material'
import Footer from '../../molecules/Footer'
import Header from '../../organisms/Header'
import SideNavCompnent from '../../organisms/SideNav'
import WatchList from '../../organisms/watchlist'
import HomeTemplate from '../../templates/HomeTemplate'
import MyPortfolio from '../../organisms/MyPortfolio'
import GraphComponent from '../../organisms/graph'
import theme from '../../../theme'
import ChipSlider from '../../organisms/ChipSlider'
import TypographyComponent from '../../atoms/Typography'
import IconWithTypography from '../../molecules/iconWithTypography'
import USDCoin from '../../../assets/images/coins/USD Coin.svg'
import RecentTransactionsComponent from '../../organisms/RecentTransactions'
import Chart from '../../../assets/icons/chart.svg'
import Graph from '../../../assets/icons/graph.svg'
import IconComponent from '../../atoms/icons'
import { useGraphDataHook, usePortfolioCoinsandWalletHook, usePortfolioGraphHook, useRecentTransactionsHook, useWatchlistHook } from './hooks'
import { formatCurrency } from '../../../utils/constants'

const StyledWalletBox = styled(Box)({
  paddingTop: '24px',
  paddingBottom: '32px',
  paddingRight: '45px',
})

const WalletAmountContainer = styled(Grid)({
  paddingTop: '12px',
})

const WalletContainer = styled(Grid)({
  paddingTop: '12px',
})

const PortfolioTypographyBox = styled(Grid)({
  paddingBottom: '14px',
})

const LeftContainer = styled(Box)({
  paddingTop: '24px',
})

const DashboardPage = () => {
  const {watchlistData} = useWatchlistHook();
  const {totalInvestment, coinInvestment} = usePortfolioGraphHook('bitcoin');
  const {portfolioCoins, cashWallet} = usePortfolioCoinsandWalletHook();
  const {recentTransactions} = useRecentTransactionsHook();
  const {graphData} = useGraphDataHook('bitcoin')

  return (
    <HomeTemplate
      header={<Header pageName="Dashboard" />}
      footer={<Footer />}
      sideNav={<SideNavCompnent />}
    >
      <Grid container direction="row" sx={{overflowX: 'hidden'}}>
        <Grid item xs={8} sx={{ paddingRight: '24px' }}>
        <LeftContainer>
        <WatchList cardsData={watchlistData} />
        <Box>
          <PortfolioTypographyBox container direction="row">
            <Grid item xs={6}>
              <TypographyComponent
                variant="subtitle1"
                children="My Portfolio"
                color={theme.palette.textColor.highEmphasis}
              />
            </Grid>
            <Grid item xs={6} display="flex" justifyContent={'end'}>
              <Stack direction="row" spacing={'13px'}>
                <IconComponent
                  src={Chart}
                  width={'19.95px'}
                  height={'19.95px'}
                />
                <IconComponent src={Graph} width={'18.71px'} height={'18px'} />
              </Stack>
            </Grid>
          </PortfolioTypographyBox>
          <GraphComponent
            height="246px"
            width="100%"
            borderColor={theme.palette.chipColors.main}
            fillColor={theme.palette.chipColors.main}
            borderColor2={theme.palette.graphColor.borderColor2}
            fillColor2={theme.palette.graphColor.fillColor2}
            categories={[
              'Jun 8',
              'Jun 15',
              'Jun 22',
              'Jun 30',
              'Jul 7',
              'Jul 13',
            ]}
            data={[19418.037989243952,
              19448.14900175761,
              19142.694767392895,
              19758.628039738272,
              19153.039779986986,
              19406.380947809706]}
            data2={graphData}
            investmentValue={totalInvestment.investmentValue}
            percentChange={totalInvestment.percentChange}
            typeOfInvestment={totalInvestment.typeOfInvestment}
            dashboardPage={true}
            investmentValue2={coinInvestment.investmentValue}
            typeOfInvestment2={coinInvestment.typeOfInvestment}
            percentChange2={coinInvestment.percentChange}
          />
        </Box>

        <ChipSlider />
      </LeftContainer>
        </Grid>
        <Grid item xs={4} display={'flex'} justifyContent={'end'}>
        <Box
        sx={{
          backgroundColor: theme.palette.structural.main,
          paddingLeft: '24px',
        }}
      >
        <MyPortfolio portfolioData={portfolioCoins}/>
        <StyledWalletBox>
        <TypographyComponent variant="subtitle1" children={'My wallets'} />
        <WalletContainer container>
          <Grid item xs={6}>
            <IconWithTypography
              image={USDCoin}
              imageHeight={'42px'}
              imageWidth={'42px'}
              text={'USD Coin'}
              textVariant={'body1'}
              textColor={theme.palette.textColor.highEmphasis}
              subText={'US Dollar'}
              subTextVariant={'caption2'}
              subTextColor={theme.palette.textColor.mediumEmphasis}
            />
          </Grid>
          <WalletAmountContainer
            item
            xs={6}
            display={'flex'}
            justifyContent={'flex-end'}
          >
            <TypographyComponent
              variant={'body1'}
              children={formatCurrency.format(cashWallet)}
              color={theme.palette.textColor.highEmphasis}
            />
          </WalletAmountContainer>
        </WalletContainer>
      </StyledWalletBox>
        <RecentTransactionsComponent
          recentTransactions={recentTransactions}
        />
      </Box>
        </Grid>
      </Grid>
    </HomeTemplate>
  )
}

export default DashboardPage
