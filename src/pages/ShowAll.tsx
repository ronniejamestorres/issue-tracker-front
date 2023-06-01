import React from "react";
import IssuesList from "../component/IssuesList";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function ShowAll() {
  return (
    <>
      <Navbar />
      <IssuesList />
      <Footer />
    </>
  );
}

export default ShowAll;
