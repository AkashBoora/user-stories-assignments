import { Box, styled } from '@mui/material'
import React from 'react'
import IconComponent from '../../atoms/Icons'
import Transport from '../../../assets/icons/delivery.svg'
import TypographyComponent from '../../atoms/Typography'
import Stepper from '../../../assets/icons/stepper.svg'
import Wallet from '../../../assets/icons/wallet.svg'
import BankCard from '../../../assets/icons/bankCard.svg'
import theme from '../../../theme'
import { transactionHistoryStepper } from '../../../utils/constants'

const OuterBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  alignContent: 'center',
  marginTop: '5px',
}))

const ImageBox = styled(Box)(() => ({
  backgroundColor: theme.palette.greyColors.grey100,
  borderRadius: '50%',
  width: '42px',
  height: '42px',
}))

const InnerBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  alignItems: 'center',
}))

interface Props  {
  currencySymbol?: string
}

const TransactionStepper = ({currencySymbol}:Props) => {
  currencySymbol = currencySymbol? currencySymbol : "BTC"
  return (
    <div>
      <OuterBox data-testid="transaction-stepper">
        <InnerBox>
          <ImageBox>
            <IconComponent
              height="32px"
              width="32px"
              padding="5px 6px"
              src={BankCard}
            />
          </ImageBox>
          <OuterBox>
            <TypographyComponent
              variant="caption2"
              style={{ color: theme.palette.textColor.mediumEmphasis }}
            >
              {transactionHistoryStepper.step1[0]}
            </TypographyComponent>
            <TypographyComponent
              variant="body1"
              style={{ color: theme.palette.textColor.highEmphasis }}
            >
              {transactionHistoryStepper.step1[1]}
            </TypographyComponent>
          </OuterBox>
        </InnerBox>
        <IconComponent height="40px" width="40px" src={Stepper} />
        <InnerBox>
          <ImageBox>
            <IconComponent
              height="32px"
              width="32px"
              padding="5px 6px"
              src={Transport}
            />
          </ImageBox>
          <OuterBox>
            <TypographyComponent
              variant="caption2"
              style={{ color: theme.palette.textColor.mediumEmphasis }}
            >
              {transactionHistoryStepper.step2[0]}
            </TypographyComponent>
            <TypographyComponent
              variant="body1"
              style={{ color: theme.palette.textColor.highEmphasis }}
            >
              {currencySymbol}
            </TypographyComponent>
          </OuterBox>
        </InnerBox>
        <IconComponent height="40px" width="40px" src={Stepper} />
        <InnerBox>
          <ImageBox>
            <IconComponent
              height="32px"
              width="32px"
              padding="5px 6px"
              src={Wallet}
            />
          </ImageBox>
          <OuterBox>
            <TypographyComponent
              variant="caption2"
              style={{ color: theme.palette.textColor.mediumEmphasis }}
            >
              {transactionHistoryStepper.step3[0]}
            </TypographyComponent>
            <TypographyComponent
              variant="body1"
              style={{ color: theme.palette.textColor.highEmphasis }}
            >
              {transactionHistoryStepper.step3[1]}
            </TypographyComponent>
          </OuterBox>
        </InnerBox>
      </OuterBox>
    </div>
  )
}

export default TransactionStepper
