import theme from '../theme'
import Bitcoin from '../assets/images/coins/bitcoin.svg'
import bitcoin from '../assets/images/coins/bitcoin.svg'
import ethreum from '../assets/images/coins/ethreum.svg'
import BitcoinCoin from '../assets/images/coins/Bitcoin Coin.svg'
import Cardano from '../assets/images/coins/Cardano.svg'
import DodgeCoin from '../assets/images/coins/Dodge Coin.svg'
import Tether from '../assets/images/coins/tether.svg'
import USDCoin from '../assets/images/coins/USD Coin.svg'
import Ethereum2 from '../assets/images/coins/ethereum 2.svg'
import xrp from '../assets/images/coins/XRP.svg'
import thether from '../assets/images/coins/tether.svg'
import moment from 'moment'

export const priceCorelation = [
  {
    leftText: 'Bitcoin',
    leftSubText: 'Moves tightly together',
    rightText: '$3,285,553.73',
    rightSubText: '100%',
  },

  {
    leftText: 'Etherium',
    leftSubText: 'Moves tightly together',
    rightText: '$3,285,553.73',
    rightSubText: '100%',
  },
  {
    leftText: 'ERP',
    leftSubText: 'Moves tightly together',
    rightText: '$3,285,553.73',
    rightSubText: '100%',
  },
  {
    leftText: 'Tether',
    leftSubText: 'Moves tightly together',
    rightText: '$3,285,553.73',
    rightSubText: '100%',
  },
]

export const transactionHistoryStepper = {
  step1: ['Payment method', 'Visa credit ...8845'],
  step2: ['Delivery fees', '0.001 BTC'],
  step3: ['Deposit to', 'Bitcoin wallet'],
}

export const timeLineValues = ['1H', '24H', '1W', '1M', '1Y', 'ALL']

export const dollarValue = 3406069.54

export const cryptoCoins = [
  {
    name: 'Bitcoin',
    color: theme.palette.chipColors.main,
  },
  {
    name: 'XRP',
    color: theme.palette.chipColors.color1,
  },
  {
    name: 'Polkadot',
    color: theme.palette.chipColors.color2,
  },
  {
    name: 'Ethereum',
    color: theme.palette.chipColors.color3,
  },
  {
    name: 'Tether',
    color: theme.palette.chipColors.color4,
  },
  {
    name: 'Ethereum 2',
    color: theme.palette.chipColors.color5,
  },
  {
    name: 'Dodge coin',
    color: theme.palette.chipColors.color6,
  },
]

export const MY_COINS = [
  {
    image: bitcoin,
    title: 'Bitcoin',
    symbol: 'BTC',
    value: 34000.0,
    change: 6.85,
  },
  {
    image: bitcoin,
    title: 'Bitcoin',
    symbol: 'BTC',
    value: 34000.0,
    change: 6.85,
  },
  {
    image: bitcoin,
    title: 'Bitcoin',
    symbol: 'BTC',
    value: 34000.0,
    change: 6.85,
  },
  {
    image: bitcoin,
    title: 'Bitcoin',
    symbol: 'BTC',
    value: 34000.0,
    change: 6.85,
  },
]

export const watchlistData = [
  {
    id: 'bitcoin',
    image: 'bitcoin',
    name: 'abc',
    symbol: 'abc',
    change: 2,
  },
  {
    id: 'bitcoin',
    image: 'bitcoin',
    name: 'abc',
    symbol: 'abc',
    change: -2,
  },
  {
    id: 'bitcoin',
    image: 'bitcoin',
    name: 'abc',
    symbol: 'abc',
    change: -2,
  },
  {
    id: 'bitcoin',
    image: 'bitcoin',
    name: 'abc',
    symbol: 'abc',
    change: 2,
  },
  {
    id: 'bitcoin',
    image: 'bitcoin',
    name: 'abc',
    symbol: 'abc',
    change: 2,
  },
]

export const transactionSuccess: any = {
  buy: {
    text: 'Purchase is completed, please check your balance in your crypto wallet',
    button: 'BUY CRYPTO',
  },
  sell: {
    text: 'Sell is completed, please check your balance in your Rupee coin',
    button: 'SELL CRYPTO',
  },
}

export const DELIVERY_TYPES = [
  { type: 'Instant : ', time: '2-5 minutes', fees: '0.001', values: 10 },
  { type: 'Faster : ', time: '4 hours', fees: '0.001', values: 20 },
  { type: 'Fast : ', time: '120 hours', fees: '0.001', values: 30 },
  { type: 'None', time: '', values: 40 },
]

export const currencies = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: 'bitcoin',
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    icon: 'bitcoin',
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
  },
  {
    id: 'usd-coin',
    name: 'USD Coin',
    symbol: 'USDC',
    icon: 'bitcoin',
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
  },
  {
    id: 'ripple',
    name: 'XRP',
    symbol: 'XRP',
    icon: 'bitcoin',
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
  },
  {
    id: 'ethereum2',
    name: 'Ethereum 2',
    symbol: 'ETH',
    icon: 'bitcoin',
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'CRD',
    icon: 'bitcoin',
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
  },
  {
    id: 'dodge',
    name: 'Dodge Coin',
    symbol: 'DDG',
    icon: 'bitcoin',
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
  },
  {
    id: 'tether',
    name: 'Tether',
    symbol: 'ETH',
    icon: 'bitcoin',
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
  },
]

export const BitcoinTransactionValues = [
  {
    name: 'Bitcoin',
    from: 'Badgley',
    date: 28,
    month: 'Feb',
    btcPrice: 0.001,
    dollarPrice: 900,
    status: 'pending',
  },
  {
    name: 'Bitcoin',
    from: 'Jane Cooper',
    date: 25,
    month: 'Feb',
    btcPrice: 0.023,
    dollarPrice: 1800,
    status: 'fail',
  },
  {
    name: 'Bitcoin',
    from: 'Leslie Alexander',
    date: 20,
    month: 'Feb',
    btcPrice: 0.003,
    dollarPrice: 1200,
    status: 'success',
  },
  {
    name: 'Bitcoin',
    from: 'Guy Hawkins',
    date: 18,
    month: 'Feb',
    btcPrice: 0.015,
    dollarPrice: 1000,
    status: 'success',
  },
  {
    name: 'Bitcoin',
    from: 'Jenny Wilson',
    date: 15,
    month: 'Feb',
    btcPrice: 0.065,
    dollarPrice: 3200,
    status: 'success',
  },
  {
    name: 'Bitcoin',
    from: 'Jacob Jones',
    date: 13,
    month: 'Feb',
    btcPrice: 0.009,
    dollarPrice: 9000,
    status: 'success',
  },
  {
    name: 'Bitcoin',
    from: 'Theresa Webb',
    date: 10,
    month: 'Feb',
    btcPrice: 0.002,
    dollarPrice: 1800,
    status: 'success',
  },
]

export const CHOOSE_CRYPTO = 'Choose crypto'

export const formatDate = (date: string) => {
  return moment(date, 'YYYY-MM-DD').format('LL').split(',')[0]
}

export const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export const timeValues = ['1H', '24H', '1W', '1M', '1Y']

export const compactFormat = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 1,
})

export const priceCorelationMockData: { image: string; text: string }[] = [
  {
    image: bitcoin,
    text: 'Bitcoin',
  },
  {
    image: ethreum,
    text: 'Etherium',
  },
  {
    image: xrp,
    text: 'XRP',
  },
  {
    image: thether,
    text: 'Thether',
  },
]
export const roundValue = (number: number) => {
  return Math.round(number * 100000000) / 100000000
}

export const TAX = 1000

interface HashmapProps {
  [key: string]: string
}

export const pictures: HashmapProps = {
  bitcoin: Bitcoin,
  ethereum: ethreum,
  usdCoin: USDCoin,
  xrp: xrp,
  binanceUsd: BitcoinCoin,
  solana: Ethereum2,
  dogecoin: DodgeCoin,
  polkadot: Cardano,
  maticNetwork: Tether,
}
