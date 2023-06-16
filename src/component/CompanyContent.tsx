import React from "react";
import "../App.css";
import companyimage from "../images/companyimage.svg";

const CompanyContent: React.FC = () => {
  return (
    <div className="lg:h-screen bg-white pt-28 lg:pt-10 p-4 grid grid-cols-1 lg:grid-cols-2 ">
      <div className="  pt-8 lg:pt-40">
        <p
          className="text-2xl pb-4 text-black"
          style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
        >
          Company
        </p>
        <p className="text-xl pb-4 text-black">Why we're here ?</p>
        <p className="text-black pt-8">
          The future of work doesn't work without the right tools.
        </p>
        <p className="text-black pt-4">
          The way we work together is fundamentally changing and becoming more
          collaborative, team-based, interdisciplinary, distributed, and
          knowledge-intensive.
        </p>
        <p className="text-black pt-4">
          We started to dream of simpler, faster, and more unified tooling for
          collective knowledge work. We imagined a kind of "collective brain"
          enabling teams to work together as seamlessly as a single person.
        </p>
        <p className="text-black pt-4">
          The first prototype we've built quickly caught on in our own team and
          others, which compelled us to continue to work on it to this day.
        </p>
      </div>
      <div className="pt-8 lg:pt-0  items-center flex">
        <img src={companyimage} alt="pets" className="" />
      </div>
    </div>
  );
};

export default CompanyContent;
