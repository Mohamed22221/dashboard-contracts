import React from 'react'
import styled from "styled-components"
const BackDrob = ({HandelClick , hide}) => {
  return (
      
    <StyleBackDrop onClick={HandelClick}  HandelClick={HandelClick } hide={hide}></StyleBackDrop>
  )
}
const StyleBackDrop = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: black;
width: 100%;
height: 100%;
display: none;
@media (max-width:720px ) {
    display: ${({HandelClick})=> HandelClick && "block" };
}

opacity: 0.3;
transition: 2s;
z-index: 99;
`

export default BackDrob