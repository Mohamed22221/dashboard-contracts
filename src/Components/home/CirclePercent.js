import React from 'react'
import styled from "styled-components"
import { CircularProgressbar ,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CirclePercent = ({persentatge ,color}) => {
    const percentage = persentatge;
  return (
      <StyleCircle color={color}>
          
    <CircularProgressbar
     value={percentage}
     text={`${percentage}%`}
     styles={buildStyles({
     rotation: 2.85,
     textSize: '30px',
     pathTransitionDuration: 2.50,
  })}
/>
    </StyleCircle>
  )
}

const StyleCircle = styled.div`
height: 70px;
width: 70px;
margin-top: 12px;

.CircularProgressbar-trail {
  stroke: #fff;
}
.CircularProgressbar-path {
  stroke: ${({color}) => color };

}
.CircularProgressbar-text {
  fill: black;
  font-weight: bold;
}
`
export default CirclePercent