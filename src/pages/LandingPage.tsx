import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import FetchComponent from "../component/FetchComponent";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <FetchComponent />
      <Footer />
    </div>
  );
}

export default LandingPage;
