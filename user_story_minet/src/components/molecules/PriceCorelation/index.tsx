import { Box } from '@mui/material'
import React from 'react'
import IconWithTypography from '../IconWithTypography/index'
import CardTemplate from '../../templates/cardTemplate/index'
import theme from '../../../theme'
import ValueChangeTypographyComponent from '../ValueChangeTypography/index'
import TypographyComponent from '../../atoms/Typography'
import IconComponent from '../../atoms/Icons'
import Slider from '../../../assets/images/slider.svg'
import { priceCorelationMockData } from '../../../utils/constants'

const PriceCorelation = () => {
  return (
    <div data-testid="price-corelation">
      <CardTemplate
        cardVariant="outlined"
        cardWidth="100%"
        cardHeight="312px"
        cardPadding="0 10px 0 0"
        RightComponet={
          <IconComponent
            src={Slider}
            width="auto"
            height="auto"
            padding="64px 0 0 0"
          />
        }
        LeftComponet={
          <Box width="100%">
            <TypographyComponent
              variant="subtitle1"
              style={{
                fontWeight: '500',
                color: theme.palette.textColor.highEmphasis,
                padding: '16px 28px',
              }}
            >
              Price correlation with
            </TypographyComponent>
            {priceCorelationMockData.map(({image, text}) => (
              <CardTemplate
                cardVariant="elevation"
                LeftComponet={
                  <IconWithTypography
                    image={image}
                    imageHeight="42px"
                    imageWidth="42px"
                    text={text}
                    textVariant="body1"
                    textColor={theme.palette.textColor.highEmphasis}
                    subText="Moves tightly together"
                    subTextVariant="caption2"
                    subTextColor={theme.palette.textColor.mediumEmphasis}
                  />
                }
                RightComponet={
                  <ValueChangeTypographyComponent
                    topText="$3,285,553.73"
                    topTextColor={theme.palette.textColor.highEmphasis}
                    bottomText="100%"
                    bottomTextColor={theme.palette.textColor.mediumEmphasis}
                  />
                }
                cardHeight="58px"
                cardWidth="100%"
              />
            ))}
          </Box>
        }
      />
    </div>
  )
}

export default PriceCorelation
