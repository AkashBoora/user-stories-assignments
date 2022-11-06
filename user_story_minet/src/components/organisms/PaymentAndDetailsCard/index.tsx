import { Box, Grid, styled } from '@mui/material'
import React from 'react'
import TypographyComponent from '../../atoms/Typography'
import theme from '../../../theme/index'

interface PaymentAndDetailsProps {
  variant: 'payment' | 'balance' | 'deposit'
  title: string
  icon: React.ReactElement
  coinType?: string
  balance?: number
  coinSymbol?: string
}

const StyledGrid = styled(Grid)({
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRadius: '4px',
  background: theme.palette.structural.main,
})

const PaymentAndDetailsCard = (props: PaymentAndDetailsProps) => {
  const { variant, title, icon, coinType, balance, coinSymbol } = props
  return (
    <Box data-testid="payment-and-details">
      <StyledGrid
        container
        direction={'column'}
        display="flex"
        gap={1.5}
        padding="24px"
      >
        <Grid item>
          <TypographyComponent variant="body1" children={title} />
        </Grid>
        <Grid item>
          <StyledGrid
            padding={'15px'}
            container
            display={'flex'}
            direction={'row'}
            justifyContent="space-between"
            alignItems={'center'}
          >
            <Grid item>
              <Grid
                container
                direction={'row'}
                display="flex"
                alignItems={'center'}
                gap={2}
              >
                <Grid item>{icon}</Grid>
                <Grid item>
                  {props.variant === 'payment' && (
                    <Grid container direction={'column'} gap={0.5}>
                      <Grid item>
                        <TypographyComponent
                          variant="caption1"
                          children={coinType}
                        />
                      </Grid>
                      <Grid item>
                        <TypographyComponent
                          variant="subtitle1"
                          children={`Total balance: $${balance}`}
                          color={theme.palette.textColor.mediumEmphasis}
                        />
                      </Grid>
                    </Grid>
                  )}
                  {(variant === 'deposit' || variant === 'balance') && (
                    <TypographyComponent
                      variant="caption1"
                      children={coinType}
                    />
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {(variant === 'deposit' || variant === 'payment') && (
                <TypographyComponent
                  variant="caption1"
                  color={theme.palette.textColor.mediumEmphasis}
                  children="Default"
                />
              )}
              {variant === 'balance' && (
                <TypographyComponent
                  variant="subtitle1"
                  children={`${balance} ${coinSymbol}`}
                />
              )}
            </Grid>
          </StyledGrid>
        </Grid>
      </StyledGrid>
    </Box>
  )
}

export default PaymentAndDetailsCard
