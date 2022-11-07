import { Box, styled } from '@mui/material'
import React from 'react'
import IconComponent from '../../atoms/icons'
import Success from '../../../assets/images/success.svg'
import TypographyComponent from '../../atoms/Typography'
import ButtonComponent from '../../atoms/Button'
import { transactionSuccess } from '../../../utils/constants'
import theme from '../../../theme'
import { NavLink } from 'react-router-dom'

interface TransactionSuccessProps {
  successType: 'buy' | 'sell'
  price: string
}

const ContainerBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  alignContent: 'center',
  alignItems: 'center',
  width: '396px',
}))

const ButtonContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '24px',
  alignContent: 'center',
  alignItems: 'center',
}))

const TextContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  alignItems: 'center',
}))

const TransactionSuccess = (props: TransactionSuccessProps) => {
  const { successType, price } = props
  return (
    <div>
      <ContainerBox data-testid="transaction-success-container">
        <IconComponent src={Success} height="64px" width="64px" />
        <TextContainer>
          <TypographyComponent variant="heading4" data-testid="total-price">
            {price}
          </TypographyComponent>
          <TypographyComponent
            variant="body2"
            style={{
              textAlign: 'center',
            }}
          >
            {successType == 'sell'
              ? transactionSuccess.sell.text
              : transactionSuccess.buy.text}
          </TypographyComponent>
        </TextContainer>
        <Box></Box>
        <ButtonContainer>
          <NavLink
            to={successType === 'buy' ? '/sell' : '/purchase'}
            style={{ textDecoration: 'none' }}
          >
            <ButtonComponent
              backgroundColor={theme.palette.primary.color1}
              variant="outlined"
              style={{ width: '125px', height: '42px' }}
            >
              {successType == 'sell'
                ? transactionSuccess.buy.button
                : transactionSuccess.sell.button}
            </ButtonComponent>
          </NavLink>
          <ButtonComponent
            backgroundColor={theme.palette.primary.color1}
            variant="contained"
            style={{ width: '151px', height: '42px' }}
          >
            GO TO USD COIN
          </ButtonComponent>
        </ButtonContainer>
      </ContainerBox>
    </div>
  )
}

export default TransactionSuccess
