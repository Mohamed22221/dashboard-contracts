import React from 'react'
import styled from 'styled-components'
import DataHome from '../../data/DataHome'
import CirclePercent from './CirclePercent'
import SecretContracts from './SecretContracts'
const MainDataContracts = () => {
 
  return (
    <MainStyleData>
     {DataHome.map((item) =>{
       return (
         
       <MainItemStyleData key={item.id} style={{borderColor:item.color}}  >
          <div>
            <h3>{item.title}</h3> 
          </div>
        <div className='main-item'>
         <RightItem>
        <p>عدد العقود : <span>{item.NumberContracts}</span></p>
        <p>أجمالي قيمه العقود :<span>{item.AllPriceContracts}</span></p>
         </RightItem>
         <LeftItem>
        
        <CirclePercent persentatge={item.percentage} color={item.color}/>

         </LeftItem>
         </div>
         
       </MainItemStyleData>
       )
     })
     }
     <SecretContracts/>
    </MainStyleData>
  )
}
const MainStyleData = styled.div`
margin: 20px 0 0 5px ;
padding: 10px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
@media (max-width: 1375px) {
  justify-content: space-evenly;
}

`
const MainItemStyleData = styled.div`
  padding:10px 20px 20px 20px;
  margin: 0 10px;
  margin: 15px 0px;
  border-top: 4px solid var(--red-color);
  background-color: white;
  border-radius: 8px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  transition: 0.5s;
  @media (max-width: 520px) {
    margin: 15px 0px;
    width: 100%;
    padding:10px 10px ;
  }
  :hover{
    transform: translateY(-4px);
    
  }

.main-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
}
h3{
  padding: 10px 0;
  position: relative;
  ::after{
    content: "";
    position: absolute;
    bottom: -4px;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: var( --font-obacity);
    opacity: 0.5;
    
  }
}
`
const RightItem= styled.div`
p{
  @media (max-width:364px) {
    font-size:13px;
  }
  padding: 5px 0;
  color: var(--font-obacity);
  font-weight: bold;
  span{
  margin-right: 5px;
  color: var(--font);
  }
}
`
const LeftItem= styled.div`
margin-right: 50px;


`
export default MainDataContracts