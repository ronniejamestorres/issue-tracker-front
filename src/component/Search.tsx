import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IssuesList from './IssuesList';

interface Issue {
  number: number;
  title: string;
}

const Search: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios
      .get('https://issue-tracker-app-n4roq.ondigitalocean.app/all/issue')
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
    <div className="mr-[750px] pt-24 bg-gray-100">
      <header className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}>Search Issues</h1>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search.."
              value={searchQuery}
              onChange={handleSearch}
              
              className="w-[750px] h-[53px] left-199 top-179 px-4 rounded-2xl border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          {searchQuery && (
            <ul className="mt-8 bg-gray-200 rounded-lg pl-6">
              {filteredIssues.map((issue: Issue) => (
                <li  key={issue.number}>{issue.title} </li>
              ))}
              
            </ul>
          )}
        </div>
      </header>
    </div>
  );
};

export default Search;
