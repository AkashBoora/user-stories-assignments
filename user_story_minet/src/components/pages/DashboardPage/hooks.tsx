import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  DashboardPortfolioProps,
  PortfolioCoinProps,
  TransactionsProps,
  WatchlistDataProps,
} from '../../../utils/types'

export const useWatchlistHook = () => {
  const [watchlistData, setWatchlistData] = useState<WatchlistDataProps[]>([])

  const setData = async () => {
    try {
      await axios
        .get('http://13.58.225.215:8001/users/1/watchlist/')
        .then(async (response: any) => {
          const data = response.data
          const newCoins: WatchlistDataProps[] = [...watchlistData]
          for (let coinData of data) {
            await axios
              .get(`http://13.58.225.215:8003/cryptocurrencies/${coinData}`)
              .then((response: any) => {
                const cryptoData = response.data
                const tempWatchData = {
                  id: cryptoData.id,
                  image: cryptoData.icon,
                  name: cryptoData.name,
                  symbol: cryptoData.symbol,
                  change: cryptoData.priceChangeIn24hrs,
                }
                newCoins.push(tempWatchData)
              })
          }
          setWatchlistData(newCoins)
        })
    } catch {}
  }

  useEffect(() => {
    setData()
  }, [])

  return { watchlistData, setWatchlistData }
}

export const usePortfolioGraphHook = (coin: string) => {
  const [totalInvestment, setTotalInvestment] =
    useState<DashboardPortfolioProps>({
      typeOfInvestment: '',
      percentChange: 0.0,
      investmentValue: 0.0,
    })
  const [coinInvestment, setCoinInvestment] = useState<DashboardPortfolioProps>(
    {
      typeOfInvestment: '',
      percentChange: 0.0,
      investmentValue: 0.0,
    }
  )

  const setData = async () => {
    try {
      await axios
        .get('http://13.58.225.215:8001/users/1/wallets/')
        .then(async (response: any) => {
          const data = response.data
          let tempInvestment = 0
          for (let coinData of data) {
            tempInvestment += coinData.investedAmount
            if (coinData.cryptoId === coin) {
              await axios
                .get(`http://13.58.225.215:8003/cryptocurrencies/${coinData.cryptoId}`)
                .then((response: any) => {
                  const responseData = response.data
                  const tempCoinInvestment: DashboardPortfolioProps = {
                    typeOfInvestment: responseData.name,
                    percentChange: responseData.priceChangeIn1month,
                    investmentValue: coinData.investedAmount,
                  }
                  setCoinInvestment(tempCoinInvestment)
                })
            }
          }
          const tempTotalInvestment: DashboardPortfolioProps = {
            typeOfInvestment: 'Total investment',
            percentChange: +1.2,
            investmentValue: tempInvestment,
          }
          setTotalInvestment(tempTotalInvestment)
        })
    } catch {}
  }

  useEffect(() => {
    setData()
  }, [])

  return {
    totalInvestment,
    setTotalInvestment,
    coinInvestment,
    setCoinInvestment,
  }
}

export const usePortfolioCoinsandWalletHook = () => {
  const [portfolioCoins, setPortfolioCoins] = useState<PortfolioCoinProps[]>([])
  const [cashWallet, setCashWallet] = useState<number>(0)

  const setData = async () => {
    try {
      await axios
        .get('http://13.58.225.215:8001/users/1/wallets/')
        .then(async (response: any) => {
          let data = response.data
          setCashWallet(data[0].balance)
          data.shift()
          const newCoins: PortfolioCoinProps[] = [...portfolioCoins]
          for (let coinData of data) {
            await axios
              .get(
                `http://13.58.225.215:8003/cryptocurrencies/${coinData.cryptoId}`
              )
              .then((response: any) => {
                const tempData = response.data
                let tempChange =
                  coinData.investedAmount !== 0
                    ? (tempData.price*coinData.balance - coinData.investedAmount) /
                      coinData.investedAmount
                    : 0
                if(Math.abs(tempChange)<0.000001) tempChange = 0;
                tempChange *= 100
                const tempCoin: PortfolioCoinProps = {
                  id: tempData.id,
                  image: tempData.icon,
                  name: tempData.name,
                  symbol: tempData.symbol,
                  investedAmount: coinData.investedAmount,
                  change: tempChange,
                }
                newCoins.push(tempCoin)
              })
          }
          setPortfolioCoins(newCoins)
        })
    } catch {}
  }

  useEffect(() => {
    setData()
  }, [])

  return { portfolioCoins, setPortfolioCoins, cashWallet, setCashWallet }
}

export const useRecentTransactionsHook = () => {
  const [recentTransactions, setRecentTransactions] = useState<
    TransactionsProps[]
  >([])

  const setData = async () => {
    try {
      await axios
        .get('http://13.58.225.215:8001/users/1/transactions/')
        .then((response: any) => {
          const data = response.data
          let tempTransactions: TransactionsProps[] = [...recentTransactions]
          for (let transactionData of data) {
            tempTransactions.push(transactionData)
          }
          if (tempTransactions.length > 4) {
            tempTransactions = tempTransactions.slice(-4).reverse();
          }
          setRecentTransactions(tempTransactions)
        })
    } catch {}
  }

  useEffect(() => {
    setData()
  }, [])

  return { recentTransactions, setRecentTransactions }
}

export const useGraphDataHook = (id: string) => {
  const [graphData, setGraphData] = useState<number[]>([])

  const setData = async () => {
    try {
      await axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=5&interval=daily`
        )
        .then((data) => {
          let dataArray = data.data.prices.map(
            (array: Array<number>) => array[1]
          )
          setGraphData(dataArray)
        })
        .catch((error) => console.log(error))
    } catch {}
  }

  useEffect(() => {
    setData()
  }, [])

  return { graphData, setGraphData }
}
