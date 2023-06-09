import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import TheTeamContent from "../component/TheTeamContent";

function TheTeam() {
  return (
    <div>
      <Navbar />
      <TheTeamContent />
      <Footer />
    </div>
  );
}

export default TheTeam;
