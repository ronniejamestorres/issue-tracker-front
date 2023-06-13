import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonIndigo from "./ButtonIndigo";
import SearchBar from "./SearchBar";

interface Comment {
  _id: string;
  comment: string;
  createdBy: string;
  createdDate: string;
}

interface Issue {
  createdBy: string;
  status: string;
  _id: string;
  title: string;
  description: string;
  labels: string[];
  comments: Comment[];
}

const IssuesList: React.FC = () => {
  const navigate = useNavigate();
  const [issues, setIssues] = useState<Issue[]>([]);
  const [search, setSearch] = useState("");
  const [filteredIssues, setFilteredIssues] = useState<Issue[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const issuesPerPage = 5;

  useEffect(() => {
    fetch("https://issue-tracker-app-n4roq.ondigitalocean.app/all/issue")
      .then((response) => response.json())
      .then((data) => {
        setIssues(data);
        setFilteredIssues(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    setFilteredIssues(
      issues.filter((issue) =>
        issue.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, issues]);

  const displayIssues = filteredIssues.slice(
    (currentPage - 1) * issuesPerPage,
    currentPage * issuesPerPage
  );

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="h-fit border pt-20 bg-white">
      <div className="border pt-10">
        <SearchBar search={search} setSearch={setSearch} />

        {displayIssues.map((issue: Issue) => (
          <div
            key={issue._id}
            className="border border-black rounded-2xl p-4 mb-2 min-h-60"
          >
            <Link to={`/comments/${issue._id}`}>
              <h2 className="font-bold text-black h-10 ">{issue.title}</h2>
            </Link>
            <p className="font-light text-xs">ID : {issue._id}</p>
            <p className="font-light text-xs">Status : {issue.status}</p>
            <p className="font-light text-xs">Created by : {issue.createdBy}</p>
            {issue.labels.map((label, index) => (
              <p key={index} className="font-light text-xs">
                Label : {label}
              </p>
            ))}
          </div>
        ))}
        <div
          className="justify-center flex pt-8 lg:pt-40"
          style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
        >
          <ButtonIndigo onClick={nextPage} text="Next" />
        </div>
      </div>
    </div>
  );
};

export default IssuesList;
