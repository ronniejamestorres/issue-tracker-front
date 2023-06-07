import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonIndigo from "./ButtonIndigo";
import landingimage from "../images/landingimage.svg";

const LandingContent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white pt-28 lg:pt-10 p-4 grid grid-cols-1 lg:grid-cols-2 ">
      <div className=" col-span-1 lg:col-span-1  border pt-8 lg:pt-40">
        <p
          style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
          className="text-2xl pb-4 text-black"
        >
          Get answers, not clues
        </p>
        <p className="text-black pt-8">
          Take action on broken lines of code, crashes, and busted API calls
          with the only developer-first app monitoring platform built to give
          you answers - not clues.
        </p>
        <p className="text-black pt-4">
          Nearly 4M developers and 90K organizations rely on Issue Tracker to
          see what actually matters, solve what's urgent faster, and learn
          continuously about their code.
        </p>
        <div
          className="justify-center flex pt-8 lg:pt-40"
          style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
        >
          <ButtonIndigo
            onClick={() => navigate("/ShowAll")}
            text="Get started"
          />
        </div>
      </div>

      <div className=" col-span-1 lg:col-span-1 pt-8 lg:pt-0 border items-center flex">
        <img src={landingimage} alt="pets" className="" />
      </div>
    </div>
  );
};

export default LandingContent;
