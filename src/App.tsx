import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FetchTest from "./pages/FetchTest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FetchTest />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
