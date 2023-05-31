import React, { useEffect, useState } from "react";

interface Issue {
  status: string;
  id: number;
  title: string;
  description: string;
  // include other issue properties as required
}

const IssuesList: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [page, setPage] = useState(1);
  const [displayIssues, setDisplayIssues] = useState<Issue[]>([]);

  const issuesPerPage = 10; // Number of issues to display per page

  useEffect(() => {
    fetch("https://issue-tracker-app-n4roq.ondigitalocean.app/all/issue")
      .then((response) => response.json())
      .then((data) => {
        setIssues(data);
        setDisplayIssues(data.slice(0, issuesPerPage));
      })
      .catch((err) => console.error(err));
  }, []);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
    setDisplayIssues(
      issues.slice(page * issuesPerPage, (page + 1) * issuesPerPage)
    );
  };

  return (
    <div className="flex justify-center border border-warning ">
      <div className="border p-10">
        {displayIssues.map((issue: Issue) => (
          <div key={issue.id}>
            <h2 className="font-bold border p-4">{issue.title}</h2>
            <p>{issue.description}</p>
          </div>
        ))}
        {displayIssues.length < issues.length && (
          <button
            onClick={nextPage}
            className="bg-success hover:bg-success text-white font-bold py-2 px-4 m-4 rounded-full hover:scale-150 "
          >
            Next
          </button>
        )}
      </div>
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          Click
        </label>
        <div
          tabIndex={0}
          className="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content"
        >
          <div className="card-body">
            <h3 className="card-title">Card title!</h3>
            <p>you can use any element as a dropdown.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuesList;

//<div className="flex justify-center">
//  {displayIssues.map((issue: Issue) => (
//    <div key={issue.id}>
//      <h2>{issue.title}</h2>
//      <p>{issue.description}</p>
//    </div>
//  ))}
//  {displayIssues.length < issues.length && (
//    <button
//      onClick={nextPage}
//      className="bg-warning hover:bg-success text-white font-bold py-2 px-4 m-4 rounded-full hover:scale-150"
//    >
//      Next
//    </button>
//  )}
//</div>;
