import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import IssuesTracker from "../component/IssuesTracker";

function ShowAll() {
  return (
    <>
      <Navbar />
      <IssuesTracker />
      <Footer />
    </>
  );
}

export default ShowAll;
