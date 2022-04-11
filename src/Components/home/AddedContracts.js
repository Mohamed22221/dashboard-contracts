import React from 'react'
import styled from 'styled-components'
import Tabel from './Tabel'

const AddedContracts = () => {
  return (
    <StyleAddedContracts>
        <Tabel />
    </StyleAddedContracts>
  )
}
const StyleAddedContracts = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`
export default AddedContracts