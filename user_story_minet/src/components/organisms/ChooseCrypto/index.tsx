import { Box, Grid, styled } from '@mui/material'
import React, { useState } from 'react'
import TypographyComponent from '../../atoms/Typography'
import ChooseCrypto from '../../molecules/ChooseCryptoCard'
import { CHOOSE_CRYPTO, pictures } from '../../../utils/constants'
import theme from '../../../theme'
import { CryptoCurrency } from '../../../utils/types'

const CustomBox = styled(Box)({
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRadius: '4px',
  padding: '20px',
  height: '372px',
  background: theme.palette.structural.main,
})

const StyledGrid = styled(Grid)({
  overflowY: 'scroll',
  '&::-webkit-scrollbar': { width: '0.3rem' },
  '&::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.structural.main,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.greyColors.grey300,
    borderRadius: '10px',
  },
})

interface ChooseCurrencyProps {
  currenciesData: CryptoCurrency[]
  handleChangeCoin?: (arg:string)=>void
}

const ChooseCurrency: React.FC<ChooseCurrencyProps> = (
  props: ChooseCurrencyProps
) => {
  const [selctedId, setSelectedId ] = useState("bitcoin"); 
  const handleClick = (id: string)=>{
    setSelectedId(id);
    if(props.handleChangeCoin)
    props.handleChangeCoin(id)
  }
  const { currenciesData } = props
  return (
    <CustomBox data-testid="chooseCurrency">
      <Grid container direction={'column'} gap={2} height="100%">
        <Grid item>
          <TypographyComponent
            variant="body1"
            color={theme.palette.textColor.highEmphasis}
          >
            {CHOOSE_CRYPTO}
          </TypographyComponent>
        </Grid>

        <StyledGrid
          item
          container
          maxHeight={'328px'}
          rowSpacing={2}
          columnSpacing={0.5}
        >
          {currenciesData &&
            currenciesData.map((currency) => {
              console.log(currency.id);
              return (
                <Grid item md={3} onClick={()=>handleClick(currency.id)}>
                  <ChooseCrypto
                    image={pictures[currency.icon]}
                    name={currency.name}
                    value={currency.price}
                    selected={currency.id===selctedId}
                  />
                </Grid>
              )
            })}
        </StyledGrid>
      </Grid>
    </CustomBox>
  )
}

export default ChooseCurrency
