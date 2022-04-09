import React from 'react'
import styled from "styled-components"
import Search from './Search'
import NoficationIcon from "../../assets/Icon/Nofication.svg"
const TopBar = () => {
  return (
    <StyleTopBar>
        <Search placeholder="أبحث عن...." />
        <div className='Nofcation'>
        <a><img src={NoficationIcon}/></a>
        <span>4</span>
        </div>
    </StyleTopBar>
  )
}
// style top bar
const StyleTopBar = styled.div`
position: sticky;
top: 0;
right: 0;
left: 0;
background-color: var(--background-color);
display: flex;
align-items: center;
width: 100%;
height: 60px;
padding:10px 20px;
.Nofcation{
position: relative;
a img{
padding:0 20px;
cursor: pointer;
}
span{
position :absolute ;
top: -5px;
left: 14px;
background-color: var(--primary-color);
border-radius: 50%;
height: 21px;
width: 20px;
text-align: center;
color: white;
} 
}
`
export default TopBar