import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthContext from "./context/AuthContext";

import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import ShowAll from "./pages/ShowAll";
import Company from "./pages/Company";
import Login from "./pages/Login";
import AddIssue from "./pages/AddIssue";
import TheTeam from "./pages/TheTeam";
import ContactUs from "./pages/ContactUs";
import CommentsPage from "./pages/CommentsPage"; // import CommentsPage at the top of the file
import Location from "./pages/Location"; // import CommentsPage at the top of the file

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/LandingPage" element={<LandingPage />}></Route>
          <Route path="/Company" element={<Company />}></Route>
          <Route path="/TheTeam" element={<TheTeam />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/Location" element={<Location />}></Route>
          <Route path="/ShowAll" element={<ShowAll />}></Route>
          <Route path="/AddIssue" element={<AddIssue />}></Route>
          <Route path="/comments/:id" element={<CommentsPage />}></Route>
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
