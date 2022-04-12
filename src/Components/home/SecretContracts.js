import React from 'react'
import styled from 'styled-components'
import Circle2 from '../../Components/home/circle2'
import DataHome2 from '../../data/DataHome2'
const SecretContracts = () => {
  return (
    
    <StyleMainSacret>
      {DataHome2.map((item ,index)=>{
        return (
     <StyleFlexSacret key={index}>     
      <TitleSacret>
          <h3>{item.name}</h3>
          <form action="/action_page.php">
            <select name="cars" id="select">
                 <option value="ربع سنوي">ربع سنوي</option>
                 <option value="نصف سنوي">نصف سنوي</option>
                 <option value="سنوي">سنوي</option>
            </select>       
          </form>
      </TitleSacret>
      <MainDataSacret>
      <RightSacret>
      <p>{item.pragraph1}</p>
      <p>{item.pragraph2}</p>
      <p>{item.pragraph3}</p>


      </RightSacret>
      <LeftSacret>
      <Circle2 
      ValueParagraph1={item.ValueParagraph1}
      ValueParagraph2={item.ValueParagraph2}
      ValueParagraph3={item.ValueParagraph3}
      colorParagraph1={item.colorParagraph1}
      colorParagraph2={item.colorParagraph2}
      colorParagraph3={item.colorParagraph3}
      />
      </LeftSacret>
      </MainDataSacret>
      </StyleFlexSacret>
      )
    })}

    </StyleMainSacret>
    
    
  )
}
const StyleMainSacret = styled.div`

display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 100%;

@media (max-width: 1375px) {
  justify-content: space-evenly;
}

@media (max-width:720px ) {
  justify-content: center;

}

`
const StyleFlexSacret = styled.div`
background-color: white;
width: 360px;
padding: 20px;
border-radius:10px ;
margin: 20px 0;
@media (max-width: 1350px) {
  margin: 15px 5px;
}

@media (max-width:720px ) {
  justify-content: center;
  gap: 20px 0px;
  margin: 15px 5px;
}
@media (max-width:520px ) {
  width: 100%;
  margin: 15px 2px;
}

`


const TitleSacret = styled.div`
display:flex;
justify-content: space-between;
form #select{
 background-color:white ;
 border: none;

}


`
const MainDataSacret= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const RightSacret= styled.div`
padding: 15px 0;
@media (max-width:364px ) {
  p{
  font-size: 13px;
}

}

p:first-child{
  padding: 0 4px;
  border-right: 4px solid var(--grean-color);
}
p:nth-child(2){
  padding: 0 4px;
  border-right: 4px solid var(--red-color);
}
p:last-child{
  padding: 0 4px;
  border-right: 4px solid var(--blue-color);
}

`
const LeftSacret= styled.div`
`


export default SecretContracts