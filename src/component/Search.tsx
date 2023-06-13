import React, { useEffect, useState } from "react";
import axios from "axios";
import IssuesList from "./IssuesList";

interface Issue {
  number: number;
  title: string;
}

const Search: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://issue-tracker-app-n4roq.ondigitalocean.app/all/issue")
      .then((response) => {
        setIssues(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const filteredIssues = issues.filter((issue: Issue) => {
    const title = issue.title.toLowerCase();
    const query = searchQuery.toLowerCase();
    return title.startsWith(query);
  });

  return (
    <div className=" pt-24 bg-gray-100">
      <header className="py-6">
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search issues"
            value={searchQuery}
            onChange={handleSearch}
            className=" px-4 rounded-2xl border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        {searchQuery && (
          <ul className="mt-8 bg-gray-200 rounded-lg pl-6">
            {filteredIssues.map((issue: Issue) => (
              <li key={issue.number}>{issue.title} </li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
};

export default Search;
