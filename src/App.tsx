import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FetchTest from "./pages/FetchTest";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FetchTest />}></Route>
        <Route path="/login" element={<Login />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
