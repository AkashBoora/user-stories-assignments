import React, { useEffect, useState } from 'react'
import { Divider, Grid, styled } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'
import IconComponent from '../../atoms/icons'
import chart from '../../../assets/icons/chart.svg'
import list from '../../../assets/icons/list.svg'
import PortfolioCard from '../../molecules/PortfolioCard'
import theme from '../../../theme'
import { PortfolioCoinProps } from '../../../utils/types'
import { formatCurrency, pictures } from '../../../utils/constants'

interface PortfolioProps {
  portfolioData: PortfolioCoinProps[]
}

const StyledDivider = styled(Divider)({
  color: theme.palette.greyColors.grey100,
  borderWidth: '1px',
})

const StyledGrid = styled(Grid)({
  overflowY: 'scroll',
  '&::-webkit-scrollbar': { width: '0.3rem' },
  '&::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.structural.main,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.greyColors.grey300,
    borderRadius: '30px',
  },
  paddingRight: '0.6rem',
})

const MyPortfolio: React.FC<PortfolioProps> = ({portfolioData}) => {
  const [totalBalance, setTotalBalance] = useState(0)
  useEffect(() => {
    let sum = 0
    portfolioData.forEach((coin) => {
      sum = sum + coin.investedAmount
    })
    setTotalBalance(sum)
  })
  return (
      <Grid
        container
        direction={'column'}
        width={'inherit'}
        padding="0.6rem"
        display="flex"
        gap={4}
        sx={{paddingRight: '46px'}}
      >
        <Grid
          container
          display={'flex'}
          justifyContent="space-between"
          alignItems={'center'}
        >
          <Grid item>
            <TypographyComponent
              children="My portfolio"
              variant="body1"
              fontWeight={'bold'}
            />
          </Grid>
          <Grid item>
            <Grid container display={'flex'} alignItems={'center'} gap={1}>
              <Grid item pt={0.2}>
                <IconComponent src={chart} width={'19.95px'} height={'19.95px'}/>
              </Grid>
              <Grid item>
                <IconComponent src={list} width={'18px'} height={'17px'}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <StyledGrid
          item
          display={'flex'}
          flexDirection="column"
          gap={3}
          maxHeight="9rem"
          sx={{ overflowY: 'scroll' }}
        >
          {portfolioData.map((coins) => (
            <PortfolioCard
              image={pictures[coins.image]}
              name={coins.name}
              symbol={coins.symbol.toUpperCase()}
              value={coins.investedAmount}
              change={coins.change}
            />
          ))}
        </StyledGrid>
        <Grid item>
          <StyledDivider />
          <Grid
            container
            display={'flex'}
            justifyContent="space-between"
            paddingTop={3}
            paddingBottom={3}
          >
            <Grid item>
              <TypographyComponent
                children="Total amount"
                variant="body1"
                fontWeight={'bold'}
                color={theme.palette.textColor.mediumEmphasis}
              />
            </Grid>
            <StyledGrid item>
              <TypographyComponent variant="body1">
                {formatCurrency.format(totalBalance)}
              </TypographyComponent>
            </StyledGrid>
          </Grid>
          <StyledDivider />
        </Grid>
      </Grid>
  )
}

export default MyPortfolio
