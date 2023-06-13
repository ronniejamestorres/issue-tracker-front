import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../component/Comments";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

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

const CommentsPage: React.FC = () => {
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
    <div>
      <Navbar />
      <Comments />
      <Footer />
    </div>
  );
};

export default CommentsPage;
