import React from 'react'
import styled from 'styled-components'
import PlanBgLeft from '../../img/plan_background_left.png'
import TimeBorder from '../../img/time_border.png'

const PlanTimeColumnBody = styled.div`
position: relative;
background-image: url(${PlanBgLeft});
font-family: Lato, sans-serif;
font-size: 13px;
line-height: 18px;
height: 580px;
width: 85px;
-webkit-box-shadow: 0 -2px 0 rgba(0, 0, 0, 0.062);
-moz-box-shadow: 0 -2px 0 rgba(0, 0, 0, 0.062);
box-shadow: 0 -2px 0 rgba(0, 0, 0, 0.062);
box-sizing: border-box;
cursor: pointer;
`

const PlanTimeColumnItem = styled.div`
  line-height: 92px;
  width: 85px;
  text-align: center;
  font-family: 'Lato', sans-serif;
  padding: 0;
`

const PlanTimeColumnItemDay = styled.div`
height: 50px;
`

const PlanTimeBorder = styled.div`
background-image: url(${TimeBorder});
position: absolute;
width: 85px;
height: 2px;
z-index: 10;
`

const PlanTimeColumn = () => (
    <PlanTimeColumnBody>
        <PlanTimeColumnItemDay></PlanTimeColumnItemDay>
        <PlanTimeColumnItem>6:00 AM<PlanTimeBorder /></PlanTimeColumnItem>
        <PlanTimeColumnItem>9:00 AM<PlanTimeBorder /></PlanTimeColumnItem>
        <PlanTimeColumnItem>12:00 PM<PlanTimeBorder /></PlanTimeColumnItem>
        <PlanTimeColumnItem>3:00 PM<PlanTimeBorder /></PlanTimeColumnItem>
        <PlanTimeColumnItem>6:00 PM</PlanTimeColumnItem>
        
    </PlanTimeColumnBody>
)

export default PlanTimeColumn