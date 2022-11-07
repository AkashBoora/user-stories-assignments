import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  addTransaction,
  fetchAllCrtptoCurrenices,
  fetchCrtptoCurrenicyById,
  fetchWallet,
  fetchWallets,
  patchWallet,
} from '../../../apis/library'
import { TAX } from '../../../utils/constants'
import { CryptoCurrency, Wallet } from '../../../utils/types'

export const usePurchaseCoin = () => {
  const [cryptoCurrency, setCryptoCurrency] = useState<CryptoCurrency[]>([])
  const [coin,setCoin] = useState<CryptoCurrency>()
  const [balance, setBalance] = useState<number>(0)
  const [price, setPrice] = useState(1000)
  const [quantity, setQuantity] = useState(0)
  const [cashWallet, setCashWallet] = useState<Wallet>()
  const [cryptoWallet, setCryptoWallet] = useState<Wallet>()
  const [coinId,setCoinId] = useState("bitcoin");

  useEffect(() => {
    fetchAllCrtptoCurrenices()
      .then((res) => {
        setCryptoCurrency(res)
      })
      .catch((err) => console.log(err))

    fetchWallet(1)
      .then((res) => {
        setBalance(res.balance)
        setCashWallet(res)
      })
      .catch((err) => console.log(err))

      fetchWallets().then((wallets:Wallet[]) => {
        const wallet:Wallet = wallets.find((wallet:Wallet)=> wallet.cryptoId===coinId) as Wallet
        setCryptoWallet(wallet)
      })
      .catch((err) => console.log(err))

    fetchCrtptoCurrenicyById(coinId)
      .then((coin) => {
        setPrice(coin.price)
        setCoin(coin);
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(()=>{
    fetchCrtptoCurrenicyById(coinId).then((coin) => {
      setPrice(coin.price)
      setCoin(coin)
    }).catch(error=>console.log(error))
    fetchWallets().then((wallets:Wallet[]) => {
      const wallet:Wallet = wallets.find((wallet:Wallet)=> wallet.cryptoId===coinId) as Wallet
      setCryptoWallet(wallet);
    }).catch(error=>console.log(error))
  },[coinId]);

  const navigate = useNavigate()

  const handleCashWallet = (price: number, quantity: number) => {
    let updatedWallet = cashWallet
    if (updatedWallet) {
      let amount = parseFloat((price * quantity + TAX).toFixed(2))
      updatedWallet.balance = updatedWallet.balance - amount
      updatedWallet.investedAmount = updatedWallet.investedAmount - amount
      patchWallet(cashWallet?.id as number,updatedWallet)
    }
  }

  const handleCryptoWallet = (price: number, quantity: number) => {
    let updatedCryptoWallet = cryptoWallet
    if (updatedCryptoWallet) {
      let amount = parseFloat((price * quantity + TAX).toFixed(2))
      updatedCryptoWallet.balance = updatedCryptoWallet.balance + quantity
      updatedCryptoWallet.investedAmount =
        updatedCryptoWallet.investedAmount + amount
      if (updatedCryptoWallet.balance) {
        updatedCryptoWallet.avgValue =
          updatedCryptoWallet.investedAmount / updatedCryptoWallet.balance
      }
      patchWallet(cryptoWallet?.id as number,updatedCryptoWallet)
    }
  }

  const handleChange = (quantity: number) => {
    setQuantity(quantity)
  }

  const handleChangeCoin = (coinId: string) => {
    setCoinId(coinId);
  }

  const handleClick = () => {
    if (balance - 1000 >= price * quantity) {
      navigate('/paymentSuccess', {
        state: { quantity: quantity, transactionType: 'buy', currencySymbol: coin?.symbol },
      })
      handleCashWallet(price, quantity)
      handleCryptoWallet(price, quantity)
      addTransaction({
        id: 0,
        cryptoId: coinId,
        transactionDateTime: new Date().toISOString(),
        quantity: quantity,
        symbol: coin?.symbol.toUpperCase() as string,
        transactionType: 'buy',
        price: price * quantity + 1000,
        status: 'success',
        remarks: 'Transaction success'
      })
    }
  }

  return {
    cryptoCurrency,
    setCryptoCurrency,
    balance,
    setBalance,
    price,
    setPrice,
    quantity,
    setQuantity,
    cashWallet,
    setCashWallet,
    cryptoWallet,
    setCryptoWallet,
    navigate,
    handleChange,
    handleClick,
    handleChangeCoin,
    coin
  }
}
