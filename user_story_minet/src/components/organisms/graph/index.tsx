import { Box, Divider, styled, Stack } from '@mui/material'
import React from 'react'
import PortfolioValueTypographyComponent from '../../molecules/PortfolioValueTypography/index'
import TimeLineTabs from '../../molecules/timeline'
import Chart from 'react-apexcharts'
import CardTemplate from '../../templates/cardTemplate'

interface GraphComponentProps {
  height: string
  width: string
  categories: string[]
  borderColor: string
  fillColor: string
  borderColor2?: string
  fillColor2?: string
  dashboardPage: boolean
  data: number[]
  data2?: number[]
  investmentValue: number
  typeOfInvestment: string
  percentChange: number
  investmentValue2?: number
  typeOfInvestment2?: string
  percentChange2?: number
}

const FlexRowBox = styled(Box)(() => ({
  display: 'flex',
  alignContent: 'center',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '0 24px',
}))

const StyledInnerBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingTop: '10px',
  paddingRight: '10px',
}))

const GraphComponent = (props: GraphComponentProps) => {
  const {
    height,
    width,
    categories,
    borderColor,
    data,
    fillColor,
    investmentValue,
    percentChange,
    typeOfInvestment,
    borderColor2,
    fillColor2,
    dashboardPage,
    investmentValue2,
    percentChange2,
    typeOfInvestment2,
    data2
  } = props
  const options = {
    chart: {
      toolbar: {
        show: false,
        sparkline: {
          enabled: true,
        },
        parentHeightOffset: 0,
      },
      id: 'graph',
      zoom: {
        autoScaleYaxis: true
      }
    },
    colors: [borderColor, borderColor2 as string],
    legend: {
      position: 'top' as const,
      horizontalAlign: 'right' as const,
    },
    xaxis: {
      textAnchor: 'start',

      labels: {
        show: true,
        rotate: 20,
        style: {
          colors: '#B2B2B9',
          paddingRight: '10',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: categories,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },

    stroke: {
      colors: [borderColor, borderColor2 as string],
      width: 1,
    },
    fill: {
      colors: [fillColor, fillColor2 as string],
      opacity: 1,
      type: 'solid',
    },
    grid: {
      show: true,
    },
    tooltip: {
      enabled: false,
    },
    dataLabels: {
      enabled: false,
    },
  }

  const series = dashboardPage
    ? [
        {
          name: 'Bitcoin',
          data: data,
        },
        {
          name: 'Total investment',
          data: data2 as number[],
        },
      ]
    : [
        {
          name: 'Bitcoin',
          data: data,
        },
      ]

      const renderDetails = () => {
        if(dashboardPage) {
          return(
            <FlexRowBox>
              <Stack direction='row' spacing={3}>
              <PortfolioValueTypographyComponent
                isInDashBoardPage={dashboardPage}
                investmentValue={investmentValue}
                typeOfInvestment={typeOfInvestment}
                percentChange={percentChange}
                width="186px"
              />
              <StyledInnerBox height={'45px'}>
              <Divider orientation="vertical" color="#E8E8F7"></Divider>
            </StyledInnerBox>
            <PortfolioValueTypographyComponent
                isInDashBoardPage={dashboardPage}
                investmentValue={investmentValue2 ? investmentValue2 : 0.0}
                typeOfInvestment={typeOfInvestment2 ? typeOfInvestment2 : ""}
                percentChange={percentChange2 ? percentChange2 : 0.0}
                width="186px"
              />
              </Stack>
              <TimeLineTabs typevariant="Dashboard" />
            </FlexRowBox>
          )
        }
        else {
          return(
            <FlexRowBox>
              <PortfolioValueTypographyComponent
                isInDashBoardPage={dashboardPage}
                investmentValue={investmentValue}
                typeOfInvestment={typeOfInvestment}
                percentChange={percentChange}
                width="186px"
              />
              <TimeLineTabs typevariant="Detail" />
            </FlexRowBox>
          )
        }
      }
  return (
    <div data-testid="graph-detail">
      <CardTemplate
        cardHeight="416px"
        cardWidth="100%"
        cardPadding="24px 0 0 0"
        LeftComponet={
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {
              renderDetails()
            }
            <Box width='100%'>
              <Chart
                options={options}
                series={series}
                type="area"
                height={height}
                width={width}
              />
            </Box>
          </Box>
        }
      />
    </div>
  )
}

export default GraphComponent
