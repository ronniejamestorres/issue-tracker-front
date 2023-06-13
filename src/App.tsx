import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import ShowAll from "./pages/ShowAll";
import Company from "./pages/Company";
import Login from "./pages/Login";
import AddIssue from "./pages/AddIssue";
import TheTeam from "./pages/TheTeam";
import ContactUs from "./pages/ContactUs";
import CommentsPage from "./pages/CommentsPage"; // import CommentsPage at the top of the file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/LandingPage" element={<LandingPage />}></Route>
        <Route path="/Company" element={<Company />}></Route>
        <Route path="/TheTeam" element={<TheTeam />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
        <Route path="/ShowAll" element={<ShowAll />}></Route>
        <Route path="/AddIssue" element={<AddIssue />}></Route>

        {/* Add this line */}
        <Route path="/comments/:id" element={<CommentsPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
