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
import active from "../../assets/Icon/active.svg" 
import {Link } from "react-router-dom";
const SideBar = ({toogleBar,HandelClose}) => {
  return (
     
    <StyleSideBar toogleBar={toogleBar}   >
        <StyleTop >
        <div className='img-logo'>
            <img src={Logo} />
        </div>
        <div className='person-login'>
            <div className='person-img'>
            <img src={Person} />
            <span><img src={active} /></span>
            </div>
            <div className='person-apout-login'>
                <h4>memper</h4>
                <p>proggramer</p>
            </div>
        </div>
        <div className='widget'>
            <ul>
            <Link to="/Home"  onClick={HandelClose}>
                <div className='item-widget'>
                    <img src={Home} />
                    <li >لوحه التحكم</li>
                </div>
            </Link>
            <Link to="/Contracts" onClick={HandelClose}>
                <div className='item-widget'>
                    <img src={contracts} />
                    <li>العقود</li>
                </div>
            </Link>
                <div className='item-widget'>
                    <img src={investors} />
                    <li> المستثمرون</li>
                </div>
                <div className='item-widget'>
                    <img src={payment} />
                    <li>المدفوعات</li>
                </div>
                <div className='item-widget'>
                    <img src={payment} />
                    <li>انشاء رابط للدفع</li>
                </div>
                
            </ul>
        </div>
        </StyleTop>
        <Stylebutton>
            <img src={logout}/>
            <li>تسجيل الخروج</li>
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
justify-content:space-between;
align-items: flex-start;
width: 230px;
padding: 10px;
z-index: 100;
transition: 0.7s;
background-color: white;
overflow: hidden;
-webkit-box-shadow: -4px 5px 24px -13px rgba(105,105,105,1);
-moz-box-shadow: -4px 5px 24px -13px rgba(105,105,105,1);
box-shadow: -4px 5px 24px -13px rgba(105,105,105,1);
@media (max-width:720px ) {
transform: ${({toogleBar}) => toogleBar ? 'translateX(0)' : 'translateX(290px)'};
}


`
const StyleTop = styled.div`
//logo 
.img-logo{
display:flex ;
justify-content: center;
position: relative;
img{
width: 90px;  
transition: 0.7s; 
}
span img{
    width: 5px;
}

}

//login person img
.person-login{
display:flex ;
padding: 20px;

.person-img {
    transition: 0.7s;
    position: relative;
    img{
        width: 60px;
        height: 60px;
    } 
    span img{
        width: 13px;
        position: absolute;
        right: 0;
        top: 22px;
    }  
}
.person-apout-login{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
h4{
    padding: 2px 10px;
    text-transform: capitalize;
}
p{
    font-size: 12px;
    color: var(--font);
}
    
} 
}
//ul icon 
.widget{
    margin-top: 30px;
    transition:0.7s;
    display: flex;
    justify-content: center;
        
    ul{
        width: 100%;
    }
    ul .item-widget{
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 10px;
        margin: 10px 0;
        width: 112%;
        transition: 0.6s;
        &:hover{
            background-color: var(--primary-color);
            li{
                color: white;
            }
        }
    }
    ul a{
        


    }
    ul li{
        transition: 0.6s;
        color: black;
        font-size: 17px;
        margin-right: 10px;  
    }
}
`

const Stylebutton = styled.div`
display: flex;
padding: 20px;
margin-bottom: 18px;
cursor: pointer;
li{
    padding-right:12px ;
}
`
export default SideBar