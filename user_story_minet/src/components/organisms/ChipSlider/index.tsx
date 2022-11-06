import { Box, Grid, styled } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'
import IconWithTypography from '../../molecules/IconWithTypography'
import InfoIcon from '../../../assets/icons/info.svg'
import theme from '../../../theme/index'
import LeftIcon from '../../../assets/icons/chevronRight.svg'
import RightIcon from '../../../assets/icons/chevronLeft.svg'
import { cryptoCoins } from '../../../utils/constants'
import IconComponent from '../../atoms/Icons'
import ChipItem from '../../atoms/ChipItem'

interface CryptoCoin {
  name: string
  color: string | undefined
}

const StyledBox = styled(Box)({
  width: 'inherit',
})

const StyledChipBox = styled(Box)({
  marginTop: '27px',
  marginBottom: '38px',
  marginLeft: '12px',
  width: '100%'
})

const StyledIconBox = styled(Box)({
  marginTop: '12px !important',
})

const ChipSlider = () => {
  const renderChips = () => {
    return cryptoCoins.map((data, index) => {
      return (
        <Grid item>
          <ChipItem
            label={data.name}
            chiptype={'squared'}
            chipcolor={data.color}
            selected={index === 0 ? true : false}
          />
        </Grid>
      )
    })
  }
  return (
    <StyledBox data-testid="chip-slider">
      <Grid container>
        <Grid item xs={5}>
          <TypographyComponent
            variant="body1"
            children={'10 coins (3 active)'}
          />
        </Grid>
        <Grid item xs={7} display="flex" justifyContent="end">
          <IconWithTypography
            image={InfoIcon}
            imageHeight={'20px'}
            imageWidth={'20px'}
            text={'Click on the currency name below to display it on the graph'}
            iconandtextgap={'10px'}
            textVariant={'caption2'}
            textColor={theme.palette.textColor.highEmphasis}
          />
        </Grid>
      </Grid>
      <StyledChipBox>
        <Grid container spacing={{xs:1, md:2 ,lg:2, xl: 5}} direction="row">
          <Grid item>
            <StyledIconBox>
              <IconComponent
                src={LeftIcon}
                height={'12.73px'}
                width={'7.8px'}
              />
            </StyledIconBox>
          </Grid>
          {renderChips()}
          <Grid item>
            <StyledIconBox>
              <IconComponent
                src={RightIcon}
                height={'12.73px'}
                width={'7.8px'}
              />
            </StyledIconBox>
          </Grid>
        </Grid>
      </StyledChipBox>
    </StyledBox>
  )
}

export default ChipSlider
