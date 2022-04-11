import React, { useState } from "react";
import styled from 'styled-components'
import MaterialTable from "material-table";


const Tabel = () => {


  const [data, setData] = useState([
    { id: "#15861679", investor: "علي ابراهيم" ,date:"28/4/2022" ,price:"$59791" ,state:"نشط" ,align:"center" , },
    { id: "#15861679", investor: "احمد ابراهيم" ,date:"28/4/2022" ,price:"$59791" ,state:"نشط" },
    { id: "#15861679", investor: "علي ابراهيم" ,date:"28/4/2022" ,price:"$59791" ,state:"غير نشط" },
    { id: "#15861679", investor: "علي ابراهيم" ,date:"28/4/2022" ,price:"$59791" ,state:"غير نشط" },
    { id: "#15861679", investor: "علي ابراهيم" ,date:"28/4/2022" ,price:"$59791" ,state:"نشط" },
    { id: "#15861679", investor: "علي ابراهيم" ,date:"28/4/2022" ,price:"$59791" ,state:"نشط" },
    { id: "#15861679", investor: "علي ابراهيم" ,date:"28/4/2022" ,price:"$59791" ,state:"نشط" },
    { id: "#15861679", investor: "علي ابراهيم" ,date:"28/4/2022" ,price:"$59791" ,state:"نشط"  },
  ]);

  const columns = [
    { title: "كود العقد",  field: "id" ,align:"center"  },
    { title: "المستثمر", field: "investor" ,align:"center" },
    { title: "تاريخ بدايه العقد", field: "date" ,align:"center" },
    { title: "قيمه التعاقد", field: "price" ,align:"center" },
    { title: "حاله العقد", field: "state" ,align:"center" , }
    
  ];

  return (
    <StyleTabel>
      <div className="title">
      <h3>العقود المضافه حديثا</h3>
      <span>1359</span>
      </div>
      
    <MaterialTable   title="" data={data} columns={columns } 
    />
    </StyleTabel>
  )
}
const StyleTabel = styled.div`
width: 1000px;

overflow: hidden;
@media (max-width:1250px) {
  width: 98%;


}
padding: 10px 20px;


.title {
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
 h3{
  padding: 10px 0;
  margin-right: 10px;
} 
span{
  background-color: var(--font-obacity);
  padding: 3px 10px;
}
}


`
export default Tabel