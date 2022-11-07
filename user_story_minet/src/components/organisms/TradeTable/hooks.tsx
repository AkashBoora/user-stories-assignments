import axios from 'axios'
import { useEffect, useState } from 'react'
import { coinTypes, CryptoCurrency} from '../../../utils/types'

export const useCoinDataHook = (filterValue: string) => {
  const [coinData, setCoinData] = useState<CryptoCurrency[]>([])
  const [sortOrder, setSortOrder] = useState<string>('descending')

  const compare_marketCap_descending = (a: CryptoCurrency, b: CryptoCurrency) => {
    if (a.marketCap > b.marketCap) {
      return -1
    } else if (a.marketCap < b.marketCap) {
      return 1
    } else {
      return 0
    }
  }

  const compare_marketCap_ascending = (a: CryptoCurrency, b: CryptoCurrency) => {
    if (a.marketCap < b.marketCap) {
      return -1
    } else if (a.marketCap > b.marketCap) {
      return 1
    } else {
      return 0
    }
  }

  const getCoinData = async () => {
    if (sortOrder === 'descending') {
      await axios
        .get('http://13.58.225.215:8003/cryptocurrencies')
        .then((response: any) => {
          let data = response.data
          data.sort(compare_marketCap_descending)
          if (filterValue !== '') {
            let coinData = data
            coinData = coinData.filter((data: CryptoCurrency) =>
              data.name.toLowerCase().includes(filterValue.toLowerCase())
            )
            setCoinData(coinData)
          } else {
            setCoinData(response.data)
          }
        }).catch((err) => console.log(err))
    } else {
      await axios
        .get('http://13.58.225.215:8003/cryptocurrencies')
        .then((response: any) => {
          let data = response.data
          data.sort(compare_marketCap_ascending)
          if (filterValue !== '') {
            let coinData = data
            coinData = coinData.filter((data: CryptoCurrency) =>
              data.name.toLowerCase().includes(filterValue.toLowerCase())
            )
            setCoinData(coinData)
          } else {
            setCoinData(response.data)
          }
        }).catch((err) => console.log(err))
    }
  }

  useEffect(() => {
    getCoinData()
  }, [sortOrder, filterValue])

  const handleMarketCapClick = () => {
    if (sortOrder === 'descending') {
      setSortOrder('ascending')
    } else {
      setSortOrder('descending')
    }
  }

  return { coinData, setCoinData, sortOrder, setSortOrder, handleMarketCapClick }
}

export const useWatchlistHook = () => {
  const[watchlistData, setWatchlistData] = useState<string[]>([])
  const [change, setChange] = useState<boolean>(true)

  const setData = async () => {
    await axios.get('http://13.58.225.215:8001/users/1/watchlist/').then((response: any) => {
      setWatchlistData(response.data)
    }).catch((err) => console.log(err))
  }

  const handleWatchlistDelete = async (coin: coinTypes) => {
    await axios
      .delete(`http://13.58.225.215:8001/users/1/watchlist/${coin}`)
      .then((response: any) => response.data)
      .catch((err) => console.log(err))
    setChange(!change)
  }

  const handleWatchlistInsert = async (coin: coinTypes) => {
    await axios
      .post(`http://13.58.225.215:8001/users/1/watchlist/`,coin,{headers: {"Content-Type": "text/plain"}})
      .then((response: any) => response.data)
      .catch((err) => console.log(err))
  
      setChange(!change)
  }
  

  useEffect(() => {
    setData()
  },[change])

  return {watchlistData, setWatchlistData, change, setChange, handleWatchlistDelete, handleWatchlistInsert}
}