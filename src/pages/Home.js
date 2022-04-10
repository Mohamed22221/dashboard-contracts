import React from 'react'
import styled from "styled-components"
import MainDataContracts from '../Components/home/MainDataContracts'

const Home = () => {
  return (
    <StyleHome>
      <ContainerHome>
        <MainDataContracts/>
      </ContainerHome>
    </StyleHome>
  )
}
// Style Home
const StyleHome = styled.div`
display: flex;


`
const ContainerHome = styled.div`
width: 100%;
margin-right: 250px;
@media (max-width: 720px) {
  margin-right: 4px; 
}

`

export default Home