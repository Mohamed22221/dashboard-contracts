import React from 'react'
import styled from "styled-components"
import searchIcon from "../../assets/Icon/search.svg"
const Search = ({placeholder}) => {
  return (
    <StyleSearch>
        <form>
        <input type="search"  placeholder={placeholder} />
        <a><img src={searchIcon} /></a>
        </form>

    </StyleSearch>
  )
}
// style search
const StyleSearch = styled.div`
form{
position: relative;
input{
padding:10px;
width: 270px;
margin-right: 120px;
font-size: 16px;
border: 1px solid var(--font-two-obacity);
border-radius: 20px;
::placeholder{
color:var(--font-two-obacity) ;
}
@media (max-width:500px) {
width: 200px;
margin-right: 0px;
}
}

a img{
width:20px ;
position: absolute;
bottom: 12px;
left: 35px;
}    
}

`
export default Search