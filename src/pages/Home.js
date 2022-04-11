import React from 'react'
import styled from "styled-components"
import AddedContracts from '../Components/home/AddedContracts'
import MainContracts2 from '../Components/home/MainContracts2'
import MainDataContracts from '../Components/home/MainDataContracts'

const Home = () => {
  return (
    <StyleHome>
      <ContainerHome>
        <MainDataContracts/>
        <MainContracts2 />
        <AddedContracts />
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
margin-right: 240px;

@media (max-width: 720px) {
  margin-right: 4px; 
}

`

export default Home