import { Grid, styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ImageComponent from '../../atoms/image'
import Logo from '../../../assets/icons/logo.svg'
import DashboardInActive from '../../../assets/icons/dashboard.svg'
import DashboardActive from '../../../assets/icons/dashboardactive.svg'
import Analytics from '../../../assets/icons/analytics.svg'
import Trades from '../../../assets/icons/trade.svg'
import Notification from '../../../assets/icons/notification.svg'
import LogOut from '../../../assets/icons/logout.svg'
import IconComponent from '../../atoms/icons'
import { Link, useLocation } from 'react-router-dom'

const StyledGrid = styled(Grid)(() => ({
  width: '80px',
  gap: '44px',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'absolute',
}))

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
}))

const iconsList = [Analytics, Trades, Notification, LogOut]

const SideNavCompnent = () => {
  const location = useLocation().pathname
  return (
    <StyledGrid data-testid="sideNav">
      <StyledBox>
        <ImageComponent src={Logo} width="32px" height="32px" />
      </StyledBox>
      <Link to="/">
      <StyledBox data-testid='dashboard'>  
          <IconComponent
            src={location !== '/' ? DashboardInActive : DashboardActive}
            width="20px"
            height="20px"
          />
      </StyledBox>
      </Link>
      {iconsList.map((iconSrc) => (
        <StyledBox key={iconSrc}>
          <IconComponent src={iconSrc} height="20px" width="auto" />
        </StyledBox>
      ))}
    </StyledGrid>
  )
}

export default SideNavCompnent
