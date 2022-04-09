import TopBar from "./Components/glopal/TopBar";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Investors from "./pages/Investors";
import Contracts from "./pages/Contracts";
import Payment from "./pages/Payments";
import PaymentLink from "./pages/PaymentLink";

function App() {

  
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Hoom" element={<Home />} />
        <Route path="Contracts" element={<Contracts />} />
        <Route path="Investors" element={<Investors />} />
        <Route path="Payment" element={<Payment />} />
        <Route path="PaymentLink" element={<PaymentLink />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
