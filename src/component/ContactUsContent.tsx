import React from "react";
import contactusimage from "../images/contactusimage.svg";
import "../App.css";

const ContactUsContent: React.FC = () => {
  return (
    <div className="h-fit bg-white pt-28 lg:pt-10 p-4 grid grid-cols-1 lg:grid-cols-2 ">
      <div className="  pt-8 lg:pt-40">
        <p
          className="text-2xl pb-4 text-black"
          style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
        >
          Contact us
        </p>
        <p className="text-black pt-4  h-64 items-center flex">
          Questions, feedback, problems — we're here for it all.
        </p>
        <button
          style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
          className="w-full p-3  rounded-2xl bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white "
        >
          Send email
        </button>
      </div>
      <div className="pt-8  lg:pt-0  items-center flex">
        <img src={contactusimage} alt="pets" className="pt-8 pb-8" />
      </div>
    </div>
  );
};

export default ContactUsContent;
