import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

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
  // include other issue properties as required
}

const Comments: React.FC = () => {
  const [issue, setIssue] = useState<Issue | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://issue-tracker-app-n4roq.ondigitalocean.app/issue/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setIssue(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!issue) return <div>Loading...</div>;

  return (
    <div className="h-fit border pt-20 bg-white">
      <div className="border pt-10">
        <div
          key={issue._id}
          className="border border-black rounded-2xl p-4 mb-2 min-h-60"
        >
          <h2 className="font-bold text-black h-10 ">{issue.title}</h2>
          <p className="font-light text-xs">ID : {issue._id}</p>
          <p className="font-light text-xs">Status : {issue.status}</p>
          <p className="font-light text-xs">Created by : {issue.createdBy}</p>
          {issue.labels.map((label, index) => (
            <p key={index} className="font-light text-xs">
              Label : {label}
            </p>
          ))}
          {issue.comments.map((comment, index) => (
            <div key={index} className="border rounded-2xl m-4 p-4">
              <p className="font-light pt-4 text-black">{comment.comment}</p>
              <p className="font-light text-xs">ID: {comment._id}</p>
              <p className="font-light text-xs">
                Created by: {comment.createdBy}
              </p>
              <p className="font-light text-xs">
                Created Date: {comment.createdDate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
