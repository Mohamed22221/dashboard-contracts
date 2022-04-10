import React from 'react'
import styled from "styled-components"
import SideBar from '../Components/glopal/SideBar'
const Home = () => {
  return (
    <StyleHome>
      <ContainerHome>
      </ContainerHome>
    </StyleHome>
  )
}
// Style Home
const StyleHome = styled.div`
display: flex;

`
const ContainerHome = styled.div`
margin-right: 250px;
@media (max-width: 720px) {
  margin-right: 15px; 
}

`

export default Home