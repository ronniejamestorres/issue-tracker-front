import React from "react";
import Search from "./Search";
import IssuesList from "./IssuesList";

function IssuesTracker() {
  return (
    <>
      <div className="">
        <Search />
        <IssuesList />
      </div>
    </>
  );
}

export default IssuesTracker;
