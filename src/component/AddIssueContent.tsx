import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonIndigo from "./ButtonIndigo";
import addissueimage from "../images/addissueimage.svg";

const AddIssueContent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white pt-28 lg:pt-10 p-4 grid grid-cols-1 lg:grid-cols-2 ">
      <div className=" col-span-1 lg:col-span-1  border pt-8 lg:pt-40">
        <input
          type="email"
          className="w-full p-3 mb-4 border border-indigo-500  rounded-2xl shadow-sm bg-white "
          placeholder="Title"
        />
        <input
          type="email"
          className="w-full p-3 mb-4 border border-indigo-500  rounded-2xl shadow-sm bg-white h-64"
          placeholder="Comment"
        />
        <div
          className="justify-center flex pt-8 lg:pt-40"
          style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
        >
          <ButtonIndigo onClick={() => navigate("/ShowAll")} text="Add issue" />
        </div>
      </div>

      <div className=" col-span-1 lg:col-span-1 pt-8 lg:pt-0 border items-center flex">
        <img src={addissueimage} alt="pets" className="" />
      </div>
    </div>
  );
};

export default AddIssueContent;
