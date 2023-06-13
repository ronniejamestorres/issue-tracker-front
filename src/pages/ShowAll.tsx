import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import IssuesList from "../component/IssuesList";
import Search from "../component/Search";

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
