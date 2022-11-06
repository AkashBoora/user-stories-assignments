import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Wallet}from './../../../utils/types'
import {
  addTransaction,
  fetchAllCrtptoCurrenices,
  fetchCrtptoCurrenicyById,
  fetchWallet,
  fetchWallets,
  updateWallet,
} from '../../../apis/library'
import { roundValue } from '../../../utils/constants'
import { CryptoCurrency } from '../../../utils/types'

export const useCustomHook = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState<CryptoCurrency[]>([])
  const [cryptoCoin, setCryptoCoin] = useState<CryptoCurrency>()
  const [price, setPrice] = useState(1000)
  const [balance, setBalance] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [amount, setAmount] = useState(0)
  const [coinId,setCoinId] = useState("bitcoin")
  const navigate = useNavigate()

  const handleChangeCoin = (coinId: string) => {
    setCoinId(coinId);
  }

  useEffect(() => {
    fetchAllCrtptoCurrenices().then((cryptocurrencies) =>
      setCryptoCurrencies(cryptocurrencies)
    ).catch(error=>console.log(error))
    fetchCrtptoCurrenicyById(coinId).then((coin) => {
      setPrice(coin.price)
      setCryptoCoin(coin)
    }).catch(error=>console.log(error))
    fetchWallets().then((wallets:Wallet[]) => {
      const wallet:Wallet = wallets.find((wallet:Wallet)=> wallet.cryptoId===coinId) as Wallet
      setBalance(wallet.balance)
    }).catch(error=>console.log(error))
  }, [])
  useEffect(()=>{
    fetchCrtptoCurrenicyById(coinId).then((coin) => {
      setPrice(coin.price)
      setCryptoCoin(coin)
    }).catch(error=>console.log(error))
    fetchWallets().then((wallets:Wallet[]) => {
      const wallet:Wallet = wallets.find((wallet:Wallet)=> wallet.cryptoId===coinId) as Wallet
      setBalance(wallet.balance)
    }).catch(error=>console.log(error))
  },[coinId]);
  const handleClcik = () => {
    if (balance >= quantity) {
      fetchWallet(1).then((wallet) => {
        wallet.balance = wallet.balance + amount - 1000
        wallet.investedAmount = wallet.investedAmount + amount - 1000
        updateWallet(1, wallet)
      })
      fetchWallets().then((wallets:Wallet[]) => {
        const wallet:Wallet = wallets.find((wallet:Wallet)=> wallet.cryptoId===coinId) as Wallet
        wallet.balance = wallet.balance - quantity
        wallet.investedAmount = wallet.investedAmount - amount + 1000
        wallet.avgValue = wallet.investedAmount / wallet.balance
        if (wallet.balance === 0) {
          wallet.investedAmount = 0
          wallet.avgValue=0
        }
        updateWallet(wallet.id, wallet)
      })
      addTransaction({
        id: 0,
        cryptoId: coinId,
        transactionDateTime: new Date().toISOString(),
        quantity: quantity,
        transactionType: 'sell',
        symbol:cryptoCoin?.symbol.toUpperCase() as string,
        price: amount - 1000,
        status: 'success',
        remarks: 'Transaction success'
      })
      navigate('/paymentSuccess', {
        state: { quantity: quantity, transactionType: 'sell', currencySymbol: cryptoCoin?.symbol },
      })
    }
  }
  const onChange = (quantity: number, amount: number) => {
    setQuantity(roundValue(quantity))
    setAmount(amount)
  }
  return {
    cryptoCurrencies,
    setCryptoCurrencies,
    cryptoCoin,
    setCryptoCoin,
    price,
    setPrice,
    balance,
    setBalance,
    quantity,
    setQuantity,
    amount,
    setAmount,
    handleClcik,
    onChange,
    handleChangeCoin
  }
}
