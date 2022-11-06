import { Grid, styled } from '@mui/material';
import React from 'react'
import AvatarComponent from '../../atoms/avatar';
import IconComponent from '../../atoms/icons';
import chevronDropdown from '../../../assets/icons/chevronDown.svg'

const StyledIconContainer = styled(Grid)({
    paddingTop: '7px',
})

const AvatarDropdown = () => {
  return (
    <Grid container data-testid='avatar-dropdown' columnSpacing={1}>
        <Grid item>
            <AvatarComponent width='32px' height='32px' />
        </Grid>
        <StyledIconContainer item>
            <IconComponent width='12.73px' height='7.78px' src={chevronDropdown}/>
        </StyledIconContainer>
    </Grid>
  )
}

export default AvatarDropdown;
