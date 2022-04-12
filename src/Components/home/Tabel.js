import React, { useState } from "react";
import styled from 'styled-components'
import MaterialTable from "material-table";


const Tabel = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const [data, setData] = useState([
    { id: "#15861679", investor: "علي ابراهيم" ,date:"28/4/2022" ,price:"$59791" ,state:"نشط" ,headerStyle: { fontWeight:"bold"} },
    { id: "#15861679", investor: "احمد ابراهيم" ,date:"28/4/2022" ,price:"$59791" ,state:"نشط"  },
    { id: "#15861679", investor: "علي ابراهيم" ,date:"28/4/2022" ,price:"$59791" ,state:"غير نشط" },
    { id: "#15861679", investor: "علي ابراهيم" ,date:"28/4/2022" ,price:"$59791" ,state:"غير نشط" },
    { id: "#15861679", investor: "علي ابراهيم" ,date:"28/4/2022" ,price:"$59791" ,state:"نشط" , },
    { id: "#15861679", investor: "علي ابراهيم" ,date:"28/4/2022" ,price:"$59791" ,state:"نشط" },
    { id: "#15861679", investor: "علي ابراهيم" ,date:"28/4/2022" ,price:"$59791" ,state:"نشط" },
    { id: "#15861679", investor: "علي ابراهيم" ,date:"28/4/2022" ,price:"$59791" ,state:"نشط"  },
  ]);

  const columns = [
    { title: "كود العقد",  field: "id" ,align:"center" ,headerStyle: { fontWeight:"bold"} ,  },
    { title: "المستثمر", field: "investor" ,align:"center" ,headerStyle: { fontWeight:"bold"}},
    { title: "تاريخ بدايه العقد", field: "date" ,align:"center" ,headerStyle: { fontWeight:"bold"}},
    { title: "قيمه التعاقد", field: "price" ,align:"center",headerStyle: { fontWeight:"bold"} },
    { title: "حاله العقد", field: "state" ,align:"center" ,headerStyle: { fontWeight:"bold"} }
    
  ];

  return (
    <StyleTabel>
      <div className="title">
      <h3>العقود المضافه حديثا</h3>
      <span>1359</span>
      </div>
      
    <MaterialTable  title="" data={data} columns={columns }
    onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
      options={{
        selection: true ,
        rowStyle: { color: 'red',},
        rowStyle: rowData => ({
          backgroundColor: (selectedRow === rowData.tableData.id) ? "var(--primary-color)" : '#FFF',
          color: (selectedRow === rowData.tableData.id) ? "white" : 'black'

        })
      }}
    />
    </StyleTabel>
  )
}
const StyleTabel = styled.div`
overflow: hidden;
width:100%;
@media (max-width:550px) {
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
  color: white;
}
}

`
export default Tabel