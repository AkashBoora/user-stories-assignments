import { styled, Box, Grid, Stack } from '@mui/material'
import React from 'react'
import TypographyComponent from '../../atoms/Typography'
import { dollarValue, formatCurrency } from '../../../utils/constants'
import theme from '../../../theme'
import TransactionStepper from '../../molecules/transactionStepper'
import IconComponent from '../../atoms/icons'
import dottedLine from '../../../assets/icons/orderSummary.svg'
import ButtonComponent from '../../atoms/Button'

interface CheckoutCardProps {
  type: 'buy' | 'sell'
  btcValue: number
  price?: number
  onClick: (arg: any) => void
  amount?: number
  coinSymbol?: string
}
const StyledBox = styled(Box)({
  width: '527px',
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRadius: '4px',
  background: theme.palette.structural.main,
})

const TypographyGrid = styled(Grid)({
  paddingTop: '28px',
  paddingBottom: '32px',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0px',
  width: '100%',
  borderBottom: `1px solid ${theme.palette.greyColors.grey100}`,
})

const StepperBox = styled(Box)({
  padding: '24px 0 24px 24px',
  borderBottom: `1px solid ${theme.palette.greyColors.grey100}`,
})

const TotalBox = styled(Stack)({
  padding: '24px 0 70px 24px',
})

const renderOrderSummary = (
  leftValue: string,
  rightValue: string,
  width: string,
  bold: boolean
) => {
  return (
    <Stack direction="row" spacing={0}>
      <TypographyComponent
        variant={bold ? 'body1' : 'overline'}
        children={leftValue}
        color={theme.palette.textColor.highEmphasis}
      />
      <IconComponent
        src={dottedLine}
        width={width}
        height={'5px'}
        padding={bold ? '0 0 1px 0' : '0 0 4px 0'}
      />
      <TypographyComponent
        variant={bold ? 'body1' : 'overline'}
        children={`${rightValue}`}
        color={theme.palette.textColor.highEmphasis}
        display='flex'
        justifyContent={'end'}
      />
    </Stack>
  )
}

const StyledButtonComponent = styled(ButtonComponent)({
  width: '479px',
  height: '42px',
})

const typographyStyle = {
  color: theme.palette.textColor.mediumEmphasis,
}

const CheckoutCard: React.FC<CheckoutCardProps> = ({
  type,
  btcValue,
  price,
  onClick,
  amount,
  coinSymbol
}) => {
  coinSymbol = coinSymbol? coinSymbol: "BTC"
  price = price ? price : dollarValue
  amount = amount ? amount : btcValue * price
  let total = type === 'buy' ? amount + 1000 : amount - 1000
  return (
    <StyledBox data-testid="checkout-card">
      <TypographyGrid container spacing="12px" direction={'column'}>
        <Grid item xs={12}>
          <TypographyComponent
            variant="caption1"
            children={`You are ${type}ing`}
            style={typographyStyle}
          />
        </Grid>
        <Grid item xs={12}>
          <TypographyComponent variant="h6" children={`${btcValue} ${coinSymbol}`} />
        </Grid>
        <Grid item xs={12}>
          <TypographyComponent
            variant="caption1"
            children={`${coinSymbol} = ${formatCurrency.format(price)}`}
            style={typographyStyle}
          />
        </Grid>
      </TypographyGrid>

      <StepperBox>
        <TransactionStepper currencySymbol={coinSymbol}/>
      </StepperBox>

      <TotalBox spacing={2} direction={'column'}>
        {renderOrderSummary(
          `${btcValue} ${coinSymbol}`,
          formatCurrency.format(amount),
          '330px',
          false
        )}
        {renderOrderSummary('transaction fee', '$1,000.00', '333px', false)}
        {renderOrderSummary(
          'Total',
          formatCurrency.format(total),
          '350px',
          true
        )}
        <StyledButtonComponent
          variant="contained"
          children={type === 'buy' ? 'BUY NOW' : 'SELL NOW'}
          backgroundColor={
            type === 'buy'
              ? theme.palette.primary.main
              : theme.palette.primary.warning300
          }
          onClick={() => {
            onClick(btcValue)
          }}
        />
      </TotalBox>
    </StyledBox>
  )
}

export default CheckoutCard
