import React, { useEffect, useState } from "react";

interface Issue {
  status: string;
  _id: string;
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
    <div className="flex justify-center border border-warning pt-20 bg-white">
      <div className="border p-10">
        {displayIssues.map((issue: Issue) => (
          <div key={issue._id}>
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
    </div>
  );
};

export default IssuesList;
