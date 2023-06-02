import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import LandingContent from "../component/LandingContent";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <LandingContent />
      <Footer />
    </div>
  );
}

export default LandingPage;
