import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import contactusimage from "../images/contactusimage.svg";

const ContactUsContent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white pt-28 lg:pt-10 p-4 grid grid-cols-1 lg:grid-cols-2 ">
      <div className=" border pt-8 lg:pt-40">
        <p
          className="text-2xl pb-4 text-black"
          style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
        >
          Contact us
        </p>
        <p className="text-black pt-4 border h-64 items-center flex">
          Questions, feedback, problems — we're here for it all.
        </p>
        <button
          style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
          className="w-full p-3  rounded-2xl bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white "
        >
          Send email
        </button>
      </div>
      <div className="pt-8 lg:pt-0 border items-center flex">
        <img src={contactusimage} alt="pets" className="" />
      </div>
    </div>
  );
};

export default ContactUsContent;
