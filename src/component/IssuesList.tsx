import React, { useEffect, useState } from "react";
import axios from "axios";


interface Issue {
  status: string;
  _id: string;
  title: string;
  description: string;
  labels: string;
  // include other issue properties as required
}

const IssuesList: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [page, setPage] = useState(1);
  const [displayIssues, setDisplayIssues] = useState<Issue[]>([]);

  const issuesPerPage = 5; // Number of issues to display per page

  useEffect(() => {
    axios
      .get("https://issue-tracker-app-n4roq.ondigitalocean.app/all/issue")
      .then((response) => {
        const data = response.data;
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
    <div className="mr-[750px] pt-6">
      <header className="pb-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-2xl font-bold text-gray-900"
            style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
          >
            Issues List
          </h1>
        </div>
      </header>
      <div>
        <div className="ml-6 p-2">
          {displayIssues.map((issue: Issue) => (
            <div key={issue._id}>
              <h2 className="w-[750px] h-[109px] border-2 mb-3 border-blue-400 rounded-2xl p-8">
                {issue.title}
                <p>{issue.labels}</p>

              </h2>
              
            </div>
          ))}

          {displayIssues.length < issues.length && (
            <button
              onClick={nextPage}
              className="bg-success  text-white font-bold py-2 px-4 m-4 rounded-full"
            >
              Next Page
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default IssuesList;
