import { Box, Grid, styled } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'
import Success from '../../../assets/images/success.svg'
import Failed from '../../../assets/images/failed.svg'
import CardTemplate from '../../templates/cardTemplate'
import IconWithTypography from '../../molecules/IconWithTypography'
import ChipItem from '../../atoms/ChipItem'
import ValueChangeTypographyComponent from '../../molecules/ValueChangeTypography'
import { formatCurrency, formatDate } from '../../../utils/constants'
import { TransactionsProps } from '../../../utils/types'

interface RecentTransactionsProps {
  recentTransactions: Array<TransactionsProps>
}

const StyledGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '12px',
  width: '398px',
}))

const StyledInnerBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 24px 0px 0px',
  gap: '10px',
  width: '350px',
}))

const StyledTransactionBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '0px 24px 24px 0px',
  gap: '8px',
  width: '398px',
}))

const RecentTransactionsComponent = (props: RecentTransactionsProps) => {
  const { recentTransactions } = props
  return (
    <StyledGrid data-testid='recentTransacions'>
      <StyledInnerBox>
        <TypographyComponent variant="body1" color={'textColor.highEmphasis'}>
          Recent Transactions
        </TypographyComponent>
        <TypographyComponent variant="caption2" color={'primary.primary500'}>
          View All
        </TypographyComponent>
      </StyledInnerBox>
      {recentTransactions.map((transaction,index) => (
        <StyledTransactionBox data-testid={`transaction-${index}`} key={transaction.cryptoId+transaction.transactionDateTime}>
          <TypographyComponent
            variant="caption2"
            color={'textColor.highEmphasis'}
          >
            {formatDate(transaction.transactionDateTime.split('T')[0])}
          </TypographyComponent>
          <CardTemplate
            cardVariant="elevation"
            cardPadding="0px"
            cardWidth="350px"
            cardHeight="100%"
            LeftComponet={
              <IconWithTypography
                image={transaction.status === 'success' ? Success: Failed}
                imageHeight="44px"
                imageWidth="44px"
                textVariant="body1"
                textColor="textColor.highEmphasis"
                text={transaction.cryptoId}
                subText={
                  <ChipItem
                    label={
                      transaction.transactionType === 'buy'
                        ? 'Purchased'
                        : 'sold'
                    }
                    chiptype="rounded"
                    chipvariant='dark'
                  />
                }
              />
            }
            RightComponet={
              <ValueChangeTypographyComponent
                topText={`${
                  transaction.transactionType === 'buy' ? '+' : '-'
                }${transaction.quantity} ${
                  transaction.symbol
                }`}
                bottomText={`${
                  transaction.transactionType === 'buy' ? '-' : '+'
                }${formatCurrency.format(transaction.price)}`}
              />
            }
          />
        </StyledTransactionBox>
      ))}
    </StyledGrid>
  )
}

export default RecentTransactionsComponent
