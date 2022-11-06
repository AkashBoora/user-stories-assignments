import { Box, Grid, styled, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import theme from '../../../theme'
import { formatCurrency } from '../../../utils/constants'
import TypographyComponent from '../../atoms/Typography'
import DropDownComponent from '../../molecules/Dropdown'
import IconWithTypography from '../../molecules/iconWithTypography'
import SearchField from '../../molecules/SearchField'
import GraphComponent from '../graph'
import TransactionHistory from '../TransactionHistory'
import WebsiteIcon from '../../../assets/icons/website.svg'
import PaperWorkIcon from '../../../assets/icons/paperWork.svg'
import PriceCorelation from '../../molecules/priceCorelation'

const StyledBox = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})

const StyledTabs = styled(Tabs)({
  '& .MuiButtonBase-root': {
    padding: '0px',
    minHeight: '28px',
  },
  '& .MuiTabs-indicator': {
    top: '35px',
  },
  '& .MuiTabs-root': {
    padding: '0px',
  },
  minHeight: '37px !important',
  width: '100%',
  borderBottom: `1px solid ${theme.palette.greyColors.grey100}`,
})
const TotalBalanceBox = styled(Box)(() => ({
  backgroundColor: theme.palette.greyColors.grey50,
  display: 'flex',
  padding: '16px 24px',
  gap: '10px',
}))

const SerachBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '10px',
}))

interface TabsProps {
  investedAmount: number
  currencyData: number[]
  percentageChange: number
  categories: string[]
  coinBalance: number
  currentValue: number
  coinName: string
}
interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}
const TabsComponent = (props: TabsProps) => {
  const {
    currencyData,
    percentageChange,
    categories,
    coinBalance,
    currentValue,
    coinName,
  } = props
  const [value, setValue] = useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const Tab2 = () => (
    <Box display={'flex'} gap="12px" flexDirection={'column'}>
      <TotalBalanceBox>
        <TypographyComponent variant="subtitle1" color="textColor.highEmphasis">
          Total Balance
        </TypographyComponent>
        <TypographyComponent variant="subtitle1" color="textColor.highEmphasis" data-testid='total-balance'>
          {coinBalance}({formatCurrency.format(currentValue*coinBalance)})
        </TypographyComponent>
      </TotalBalanceBox>
      <SerachBox>
        <SearchField
          placeholder="Search All Assets"
          filter={true}
          handleChange={() => {}}
          handleClick={() => {}}
        />
        <DropDownComponent
          onChange={() => {}}
          menuList={['1H', '24H', '1W', '1M', '1Y']}
          width="77px"
        />
      </SerachBox>
      <TransactionHistory />
    </Box>
  )

  return (
    <StyledBox data-testid="tabs" id="tabs">
      <StyledTabs value={value} onChange={handleChange}>
        <Tab label="Overview" {...a11yProps(0)} defaultChecked={true} />
        <Tab label="Wallet" {...a11yProps(1)} />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        <Grid display="flex" gap="24px" flexDirection={'column'}>
          <Box width="100%" height={'416px'}>
            <GraphComponent
              height="296px"
              width={'100%'}
              categories={categories}
              borderColor="greyColors.grey100"
              fillColor={theme.palette.graphColor.fillColor}
              data={currencyData}
              investmentValue={currentValue}
              typeOfInvestment="Current Value"
              percentChange={percentageChange}
              dashboardPage={false}
              />
          </Box>
          <Grid container display={'flex'} direction="row" spacing={'24px'}>
            <Grid
              item
              xs={8}
              display="flex"
              gap="24px"
              flexDirection={'column'}
            >
              <Grid
                container
                display={'flex'}
                gap="8px"
                flexDirection={'column'}
              >
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.textColor.highEmphasis}
                >
                  About {coinName}
                </TypographyComponent>
                <TypographyComponent variant="body2" color={'black'}>
                  The world’s first cryptocurrency, Bitcoin is stored and
                  exchanged securely on the internet through a digital ledger
                  known as a blockchain. Bitcoins are divisible into smaller
                  units known as satoshis each satoshi is worth 0.00000001
                  bitcoin.
                </TypographyComponent>
              </Grid>
              <Grid
                container
                display={'flex'}
                gap="8px"
                flexDirection={'column'}
              >
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.textColor.highEmphasis}
                >
                  Resources
                </TypographyComponent>
                <Box>
                  <IconWithTypography
                    image={WebsiteIcon}
                    imageHeight={'20px'}
                    imageWidth={'20px'}
                    text={'Official Website'}
                    textVariant={'body2'}
                    textColor={theme.palette.primary.primary500}
                  />
                  <IconWithTypography
                    image={PaperWorkIcon}
                    imageHeight={'20px'}
                    imageWidth={'20px'}
                    text={'White Paper'}
                    textVariant={'body2'}
                    textColor={theme.palette.primary.primary500}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <PriceCorelation />
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tab2 />
      </TabPanel>
    </StyledBox>
  )
}

export default TabsComponent
