import { Grid, styled, Stack, Box } from '@mui/material'
import theme from '../../../theme/index'
import ButtonComponent from '../../atoms/Button'
import TypographyComponent from '../../atoms/Typography'
import DropDownComponent from '../Dropdown'

const StyledBox = styled(Box)({
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
 
  paddingLeft: '104px',
})

const MainContainer = styled(Grid)({
  height: '90px',
  borderTop: `1px solid ${theme.palette.greyColors.grey100}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingRight: '22px'
})

const StyledTypographyBlue = styled(TypographyComponent)({
  color: theme.palette.primary.primary500,
})

const StyledTypographyBlack = styled(TypographyComponent)({
  color: theme.palette.textColor.highEmphasis,
})

const StyledButton = styled(ButtonComponent)({
  width: '109px',
  height: '42px',
  border: `1px solid ${theme.palette.primary.main}`,
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: theme.palette.structural.main,
  },
})

const RightContainer = styled(Grid)({
  alignItems: 'flex-end',
  margin: '0px',
})

const Footer = () => {
  return (
    <StyledBox data-testid='footer'>
      <MainContainer container>
        <Grid item xs={6}>
          <Stack direction="row" spacing={3}>
            <StyledTypographyBlue variant="body2" children={'Dashboard'} />
            <StyledTypographyBlue variant="body2" children={'Careers'} />
            <StyledTypographyBlue
              variant="body2"
              children={'Legal & Privacy'}
            />
            <StyledTypographyBlack variant="body2" children={'© 2021 Minet'} />
          </Stack>
        </Grid>
        <RightContainer item xs={6} justifyContent="flex-end">
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <DropDownComponent onChange={() => {}} menuList={['English']} width={'170px'}/>
            <StyledButton variant="outlined" children="NEED HELP" backgroundColor={'none'}/>
          </Stack>
        </RightContainer>
      </MainContainer>
    </StyledBox>
  )
}

export default Footer
