import TopBar from "./Components/glopal/TopBar";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Investors from "./pages/Investors";
import Contracts from "./pages/Contracts";
import Payment from "./pages/Payments";
import PaymentLink from "./pages/PaymentLink";
import SideBar from "./Components/glopal/SideBar";
import React, { useState } from 'react';


function App() {
  // toggle menue bar and close sidebar 
  const [toogleBar, setToggleBar] = useState(false)

  const HandelClick = () =>{
   setToggleBar(!toogleBar)
  }
  const HandelClose = () =>{
    setToggleBar(!toogleBar)
   }




  return (
    <BrowserRouter>
      <TopBar  HandelClick={HandelClick}  />
      <SideBar toogleBar={toogleBar} HandelClose={HandelClose}  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard-contracts" element={<Home />} />
        <Route path="Contracts" element={<Contracts />} />
        <Route path="Investors" element={<Investors />} />
        <Route path="Payment" element={<Payment />} />
        <Route path="PaymentLink" element={<PaymentLink />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
