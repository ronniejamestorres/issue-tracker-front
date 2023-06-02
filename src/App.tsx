import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import ShowAll from "./pages/ShowAll";
import Company from "./pages/Company";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/LandingPage" element={<LandingPage />}></Route>
        <Route path="/Company" element={<Company />}></Route>
        <Route path="/ShowAll" element={<ShowAll />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
