import { Box, Divider, styled } from '@mui/material'
import React from 'react'
import IconComponent from '../../atoms/Icons'
import TypographyComponent from '../../atoms/Typography'
import IconWithTypography from '../../molecules/IconWithTypography'
import CardTemplate from '../../templates/cardTemplate'
import UpTrend from '../../../assets/icons/greenIncreasingTrend.svg'
import DownTrend from '../../../assets/icons/redDecreasingTrend.svg'
import EmptyStar from '../../../assets/icons/emptyStar.svg'
import FilledStar from '../../../assets/icons/filledStar.svg'
import { compactFormat } from '../../../utils/constants'
import ButtonComponent from '../../atoms/Button'
import theme from '../../../theme'

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '33px',
}))

const StyledInnerBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}))

const StyledBoxForInfo = styled(Box)(() => ({
  gap: '4px',
  display: 'flex',
  flexDirection: 'column',
}))

interface CurrencyDetailCardProps {
  coinIcon: string
  coinName: string
  coinSymbol: string
  percentageChange: number
  isAddedtoWishList: boolean
  marketCap: number
  volumeIn24H: number
  circulatingSupply: number
  handleClickForWatchListButton: (arg: any) => void
}

const CurrencyDetailCardComponent = (props: CurrencyDetailCardProps) => {
  const {
    coinIcon,
    coinName,
    coinSymbol,
    percentageChange,
    isAddedtoWishList,
    marketCap,
    volumeIn24H,
    circulatingSupply,
    handleClickForWatchListButton,
  } = props

  const SubText = () => (
    <StyledInnerBox>
      <TypographyComponent variant="body1" color={'textColor.mediumEmphasis'}>
        {coinSymbol}
      </TypographyComponent>
      <StyledInnerBox>
        <Box
          width="24px"
          height="24px"
          alignItems={'center'}
          justifyContent="center"
        >
          <IconComponent
            src={percentageChange >= 0 ? UpTrend : DownTrend}
            width="9px"
            height="9px"
            padding="7.5px"
          />
        </Box>
        <TypographyComponent
          variant="overline"
          color={
            percentageChange >= 0 ? 'primary.success500' : 'loss.borderColor'
          }
        >
          {`${percentageChange >= 0 ? '+' : ''}${percentageChange}`}%
        </TypographyComponent>
      </StyledInnerBox>
    </StyledInnerBox>
  )

  const renderTypography = (text: string, value: number) => (
    <StyledBoxForInfo data-testid="coin-info">
      <TypographyComponent variant="caption1" color="textColor.mediumEmphasis">
        {text}
      </TypographyComponent>
      <TypographyComponent
        variant="body1"
        color="textColor.highEmphasis"
      >{`$${compactFormat.format(value)}`}</TypographyComponent>
    </StyledBoxForInfo>
  )
  const Stats = () => (
    <StyledInnerBox gap="22px">
      {renderTypography('Market Cap', marketCap)}
      {renderTypography('Vol.24H', volumeIn24H)}
      {renderTypography('Circulating Supply', circulatingSupply)}
    </StyledInnerBox>
  )
  return (
    <div data-testid="currenctDetailCard">
      <CardTemplate
        borderColor={theme.palette.greyColors.grey100}
        cardWidth="100%"
        cardHeight="106px"
        cardPadding="24px 19px"
        LeftComponet={
          <StyledBox>
            <IconWithTypography
              image={coinIcon}
              imageHeight="56px"
              imageWidth="56px"
              text={coinName}
              textVariant={'h6'}
              textColor={'greyColors.grey500'}
              gapBetweenText="2px"
              subText={<SubText />}
            />
            <StyledInnerBox height={'45px'}>
              <Divider orientation="vertical" color="#B4B4CF"></Divider>
            </StyledInnerBox>
            <Stats />
          </StyledBox>
        }
        RightComponet={
          <StyledBox>
            <ButtonComponent
              sx={{ height: '42px' }}
              startIcon={
                <IconComponent
                  src={isAddedtoWishList ? FilledStar : EmptyStar}
                />
              }
              variant="outlined"
              children={
                isAddedtoWishList ? 'ADDED TO WATCHLIST' : 'ADD TO WATCHLIST'
              }
              onClick={handleClickForWatchListButton}
            />
          </StyledBox>
        }
      />
    </div>
  )
}

export default CurrencyDetailCardComponent
