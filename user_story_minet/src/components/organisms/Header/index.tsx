import { Box, Divider, Grid, styled } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import theme from '../../../theme'
import ButtonComponent from '../../atoms/Button'
import TypographyComponent from '../../atoms/Typography'
import AvatarDropdown from '../../molecules/AvatarDropdown'
type IHeaderProps = {
  pageName: string
}

const CustomBox = styled(Box)({
  padding: '20px 24px 20px 24px',
  [theme.breakpoints.up('lg')]:{
    maxWidth: '1500px'
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '98vw'
  },
  [theme.breakpoints.down('lg')]: {
    minWidth: '1366px'
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    width: '97vw',
  },
  borderBottom: `1px solid ${theme.palette.greyColors.grey100}`,
})
const CustomButton = styled(ButtonComponent)({
  borderRadius: '4px',
  padding: '0px 16px 0px 16px',
  width: '120px',
  height: '42px',
})

const StyledTypographyComponent = styled(TypographyComponent)({
  paddingTop: '4.5px'
})

const Header: React.FC<IHeaderProps> = (props) => {
  const { pageName } = props
  return (
    <CustomBox data-testid="Header">
      <Grid container>
        <Grid item xs={6}>
          <StyledTypographyComponent
            variant="h6"
            width="122px"
            height="34px"
            color="textColor.highEmphasis"
          >
            {pageName}
          </StyledTypographyComponent>
        </Grid>

        <Grid
          item
          container
          wrap="nowrap"
          xs={6}
          justifyContent="flex-end"
          columnGap={2}
        >
          <Grid item>
            <NavLink to='/sell' style={{textDecoration: 'none'}}>
            <CustomButton
              variant="contained"
              backgroundColor="primary.warning300"
            >
              <TypographyComponent variant="button">SELL</TypographyComponent>
            </CustomButton>
            </NavLink>
          </Grid>

          <Grid item>
            <NavLink to='/purchase' style={{textDecoration: 'none'}}>
            <CustomButton variant="contained" backgroundColor="primary">
              <TypographyComponent variant="button">BUY</TypographyComponent>
            </CustomButton>
            </NavLink>
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Grid item display="flex" alignItems="center">
            <AvatarDropdown />
          </Grid>
        </Grid>
      </Grid>
    </CustomBox>
  )
}

export default Header
