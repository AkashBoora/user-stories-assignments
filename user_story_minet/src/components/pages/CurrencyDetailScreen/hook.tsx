import axios from 'axios'
import moment from 'moment'
import { useEffect, useState } from 'react'
import {
  addWatchList,
  fetchCrtptoCurrenicyById,
  fetchWallets,
  fetchWatchList,
  removeWatchList,
} from '../../../apis/library'
import { CryptoCurrency, Wallet } from '../../../utils/types'

export const getGraphData = (id: string) => {
  return axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=6&interval=daily`
    )
    .then((data) => {
      let dataArray = data.data.prices.map((array: Array<number>) => array[1])
      return dataArray
    })
    .catch((error) => console.log(error))
}

export const useHooks = (id: string) => {
  const [cryptoCurrency, setCryptoCurrency] = useState<CryptoCurrency>({
    id: '',
    name: '',
    symbol: '',
    icon: '',
    price: 18000,
    marketCap: 1531564,
    totalSupply: 44125366,
    availableSupply: 85122,
    priceChangeIn1hr: 4.26,
    priceChangeIn24hrs: 1.23,
    priceChangeIn1week: 2.36,
    priceChangeIn1month: 1.36,
    priceChangeIn1year: 5.6,
    volume: 5245661,
  })
  const [watchListId, setWatchListId] = useState<string>('')
  const [isAddedToWatchList, setIsAddedToWatchList] = useState(false)
  const [graphData, setGraphData] = useState<Array<number>>([])
  const [walletData, setWalletData] = useState<Wallet>({
    id: 0,
    name: '',
    balance: 0,
    avgValue: 0,
    investedAmount: 0,
    cryptoId: id
  })

  useEffect(() => {
    getGraphData(id)
      .then((data) => {
        setGraphData(data)
      })
      .catch((error) => console.log(error))
    fetchCrtptoCurrenicyById(id).then((coin) => setCryptoCurrency(coin))
    fetchWatchList()
      .then(
        async (data) => {data.includes(id) ? setWatchListId(id) : setWatchListId(cryptoCurrency.id)}
      )
      .catch((error) => console.log(error))
      fetchWallets().then((wallets:Wallet[]) => {
        const wallet:Wallet = wallets.find((wallet:Wallet)=> wallet.cryptoId===id) as Wallet
        setWalletData(wallet);
      }).catch(error=>console.log(error))
  }, [])

  useEffect(() => {
    setIsAddedToWatchList(watchListId ? true : false)
  }, [watchListId])

  let categories: Array<string> = []
  for (let i = 6; i >= 0; i--) {
    let date = new Date()
    date.setDate(date.getDate() - i)
    categories.push(
      moment(date.toLocaleDateString(), 'DD-MM-YYYY').format('ll').split(',')[0]
    )
  }
  const handleClick = async() => {
    setIsAddedToWatchList((prevstate) => !prevstate)
    if (isAddedToWatchList) {
      await removeWatchList(watchListId).catch(error=>console.log(error))
    } else {
      await addWatchList(cryptoCurrency?.id).catch(error=>console.log(error))
    }
  }

  return {
    cryptoCurrency,
    isAddedToWatchList,
    graphData,
    walletData,
    categories,
    handleClick,
  }
}
