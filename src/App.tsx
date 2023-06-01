import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import ShowAll from "./pages/ShowAll";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/LandingPage" element={<LandingPage />}></Route>
        <Route path="/ShowAll" element={<ShowAll />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
