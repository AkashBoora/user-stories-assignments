import { Box, Card, CardContent, styled } from '@mui/material'
import React from 'react'

interface CardTemplateProps {
  LeftComponet?: JSX.Element
  RightComponet?: JSX.Element
  cardHeight?: string
  cardWidth?: string
  cardPadding?: string
  cardVariant?: 'outlined' | 'elevation'
  borderColor?: string
}

const StyledCardContent = styled(CardContent)((props:CardTemplateProps) => ({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'space-between',
  padding:props.cardPadding? `${props.cardPadding} !important`: "8px 12px 8px 24px !important"
}))

const StyledBox = styled(Box)((props:CardTemplateProps) => ({
 width:props.cardWidth,
 height:props.cardHeight
}))

const StyledCard = styled(Card)((props:CardTemplateProps)=>({
  borderColor: props.borderColor
}))
const CardTemplate = (props: CardTemplateProps) => {
  const { LeftComponet, RightComponet, cardHeight, cardWidth, cardPadding, cardVariant, borderColor } = props
  return (
    <div>
      <StyledBox cardHeight={cardHeight? cardHeight : "200px" } cardWidth={cardWidth? cardWidth: "200px"} data-testid="card-template">
        <StyledCard variant={cardVariant? cardVariant : "outlined"} elevation={0} borderColor={borderColor}>
          <React.Fragment>
            <StyledCardContent cardPadding={cardPadding}>
              {LeftComponet}
              {RightComponet}
            </StyledCardContent>
          </React.Fragment>
        </StyledCard>
      </StyledBox>
    </div>
  )
}


export default CardTemplate;