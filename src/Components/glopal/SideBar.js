import React from 'react'
import styled from "styled-components"
import Logo from "../../assets/glopal/logo.svg"
import Home from "../../assets/Icon/contracts.svg"
import investors from "../../assets/Icon/investors.svg"
import contracts from "../../assets/Icon/contracts.svg"
import payment from "../../assets/Icon/payment.svg"
import paymentlink from "../../assets/Icon/paymentlink.svg"
import logout from "../../assets/Icon/logout.svg"

import Person from "../../assets/person/person1.jpg" 
const SideBar = () => {
  return (
    <StyleSideBar>
        <StyleTop>
        <div className='img-logo'>
            <img src={Logo} />
        </div>
        <div className='person-login'>
            <div className='person-img'>
            <img src={Person} />
            <span></span>
            </div>
            <div className='person-apout-login'>
                <h4>mohamed</h4>
                <p>proggramer</p>
            </div>
        </div>
        <div className='widget'>
            <ul>
                <div className='item-widget'>
                    <img src={Home} />
                    <li>لوحه التحكم</li>
                </div>
                <div className='item-widget'>
                    <img src={contracts} />
                    <li>لوحه التحكم</li>
                </div>
                <div className='item-widget'>
                    <img src={investors} />
                    <li>لوحه التحكم</li>
                </div>
                <div className='item-widget'>
                    <img src={payment} />
                    <li>لوحه التحكم</li>
                </div>
                <div className='item-widget'>
                    <img src={paymentlink} />
                    <li>لوحه التحكم</li>
                </div>
            </ul>
        </div>
        </StyleTop>
        <Stylebutton>
            <img src={logout}/>
        </Stylebutton>
    </StyleSideBar>
  )
}
// style StyleSideBar--
const StyleSideBar = styled.div`
position: fixed;
right: 0;
top: 0;
bottom: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content:space-between;
width: 130px;
padding: 10px;
z-index: 100;
`
const StyleTop = styled.div`
//logo 
.img-logo{
display:flex ;
justify-content: center;
img{
width: 50px;    
}

}

//login person img
.person-login{
display:flex ;
padding: 30px 0 50px 0;

.person-img {
    img{
        width: 60px;
        height: 60px;
    }   
}
.person-apout-login{
       display: none;
    } 
}
//ul icon 
.widget{
    ul .item-widget{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 18px 0;
        cursor: pointer;
    }
    ul .item-widget li {
        display: none;
    }
}
`

const Stylebutton = styled.div`
margin-bottom: 18px;
cursor: pointer;
`
export default SideBar