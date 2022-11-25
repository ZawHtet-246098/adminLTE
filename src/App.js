import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardVone from "./Pages/DashboardVone";
import DashboardVthree from "./Pages/DashboardVthree";
import DashboardVTwo from "./Pages/DashboardVTwo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardVone />} />
        <Route path="/v3Dashboard" element={<DashboardVthree />} />
        <Route path="/v2Dashboard" element={<DashboardVTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
