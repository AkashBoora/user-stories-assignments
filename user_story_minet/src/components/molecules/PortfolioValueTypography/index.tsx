import { Box, Grid, styled } from '@mui/material'
import React from 'react'
import TypographyComponent from '../../atoms/Typography'
import decreasingTrend from '../../../assets/icons/redDecreasingTrend.svg'
import increasingTrend from '../../../assets/icons/greenIncreasingTrend.svg'
import IconComponent from '../../atoms/Icons'
import { formatCurrency } from '../../../utils/constants'

interface PortfolioValueTypographyProps {
  isInDashBoardPage: boolean
  typeOfInvestment: string
  investmentValue: number
  percentChange: number
  width: string
}

const StyledGrid = styled(Grid)(() => ({
  display: 'flex',
}))

const StyledInnerBox = styled(Box)(() => ({
  height: '24px',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  flexGrow: 1,
  maxWidth: '70px',
  gap: '7.5px',
}))

const PortfolioValueTypographyComponent = (
  props: PortfolioValueTypographyProps
) => {
  const {
    investmentValue,
    percentChange,
    width,
    typeOfInvestment,
    isInDashBoardPage,
  } = props
  const PercentageBox = () => (
    <StyledInnerBox
      width={!isInDashBoardPage ? '63px' : 'auto'}
      marginTop={!isInDashBoardPage ? '2px' : '0px'}
    >
      <IconComponent
        src={percentChange >= 0 ? increasingTrend : decreasingTrend}
        width="9px"
        height="9px"
      />
      <TypographyComponent
        variant={isInDashBoardPage ? 'overline' : 'caption2'}
        color={percentChange >= 0 ? 'primary.success500' : 'loss.borderColor'}
      >
        {percentageForamttedString}%
      </TypographyComponent>
    </StyledInnerBox>
  )
  const percentageForamttedString = percentChange.toFixed(1)
  return (
    <StyledGrid
      direction={'column'}
      width={width}
      data-testid="PortfolioValueTypography"
      height={isInDashBoardPage ? '66px' : '80px'}
      gap={isInDashBoardPage ? '8px' : '2px'}
    >
      <Box display={'flex'} alignItems="center" gap={'4px'}>
        <TypographyComponent
          variant="caption1"
          color={'textColor.mediumEmphasis'}
          className="investment"
        >
          {typeOfInvestment}
        </TypographyComponent>
        {isInDashBoardPage && <PercentageBox />}
      </Box>
      <TypographyComponent
        variant="h6"
        color={'textColor.highEmphasis'}
        lineHeight="34px"
      >
        {formatCurrency.format(investmentValue)}
      </TypographyComponent>
      {!isInDashBoardPage && <PercentageBox />}
    </StyledGrid>
  )
}

export default PortfolioValueTypographyComponent
