import { Box, Stack, styled } from '@mui/material'
import DropDownComponent from '../../molecules/Dropdown'
import Footer from '../../molecules/Footer'
import SearchField from '../../molecules/SearchField'
import Header from '../../organisms/Header'
import SideNavCompnent from '../../organisms/SideNav'
import HomeTemplate from '../../templates/HomeTemplate'
import { timeValues } from '../../../utils/constants'
import TradeTable from '../../organisms/TradeTable'
import theme from '../../../theme'
import { useTimePeriodHook } from './hook'
import { timeProps } from '../../../utils/types'

const SearchFieldBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '12px',
  paddingRight: '23px',
})

const TableBox = styled(Box)({
  paddingRight: '23px',
  paddingBottom: '30px',
  minHeight: '650px'
})

const StyledBox = styled(Box)({
  paddingTop: '24px'
})


const TradePage = () => {
    const {timePeriod, searchValue, handleSearchFieldChange, handleTimeDropDownChange} = useTimePeriodHook();
      
      const renderSearchFields = () => {
        return (
          <SearchFieldBox>
            <Stack spacing={'12px'} direction="row">
              <SearchField
                placeholder="Search all assets"
                filter={false}
                handleChange={handleSearchFieldChange}
                backgroundColor={theme.palette.structural.main}
                value={searchValue}
              />
              <DropDownComponent
                width={'78px'}
                menuList={timeValues}
                onChange={handleTimeDropDownChange}
                backgroundColor={theme.palette.structural.main}
              />
              <DropDownComponent
                width={'122px'}
                menuList={['All assets']}
                onChange={() => {}}
                backgroundColor={theme.palette.structural.main}
              />
            </Stack>
          </SearchFieldBox>
        )
      }
      
      const renderChildren = (timePeriod: timeProps) => {
        return (
          <StyledBox>
            {renderSearchFields()}
            {renderTable(timePeriod)}
          </StyledBox>
        )
      }
      
      const renderTable = (timePeriod: timeProps) => {
        return (
          <TableBox>
            <TradeTable timePeriod={timePeriod} filterValue={searchValue}/>
          </TableBox>
        )
      }
      
  return (
    <HomeTemplate
      header={<Header pageName={'Trade'} />}
      footer={<Footer />}
      sideNav={<SideNavCompnent />}
      children={renderChildren(timePeriod)}
      data-testid='trade-page'
    />
  )
}

export default TradePage
