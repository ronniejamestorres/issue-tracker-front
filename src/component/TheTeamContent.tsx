import React from "react";
import profile1 from "../images/profile1.svg";
import profile2 from "../images/profile2.svg";
import profile3 from "../images/profile3.svg";
import "../App.css";

const TheTeamContent: React.FC = () => {
  return (
    <div className="lg:h-fit bg-white pt-28 lg:pt-10 p-4  grid grid-cols-1 lg:grid-cols-3  text-black">
      <p
        className="text-2xl pb-4 lg:col-span-3 col-span-1 pt-8 "
        style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
      >
        Meet the team
      </p>
      <div className="p-8 lg:pt-0  items-center col-span-1 flex flex-col justify-center">
        <img src={profile1} alt="pets" className="w-40 mx-auto " />
        <p className=" m-2">Emily Richmond</p>
        <p className="">Chief Executive Officer (CEO)</p>
      </div>
      <div className="p-8 lg:pt-0  items-center col-span-1 flex flex-col justify-center">
        <img src={profile2} alt="pets" className="w-40 mx-auto" />
        <p className="m-2">Thomas "Tom" Bennett</p>
        <p>Chief Financial Officer (CFO)</p>
      </div>
      <div className="p-8 lg:pt-0  items-center col-span-1 flex flex-col justify-center">
        <img src={profile3} alt="pets" className="w-40 mx-auto" />
        <p className="m-2">Alexander "Alex" </p>
        <p>Chief Technology Officer (CTO)</p>
      </div>

      <div className="pt-8 pb-8  col-span-1 md:col-span-2 lg:col-span-3">
        <p className="text-black pt-8">
          <span className=" font-bold pr-2">Independent:</span>
          We're a profitable, growing, and fully founder-owned company. This
          helps us to focus on our customers instead of pleasing investors or
          chasing yet another funding round.
        </p>
        <p className="text-black pt-4 ">
          <span className=" font-bold pr-2">6+ years and growing:</span>
          We're in this for the long run. Due to our independence and setup, we
          can think and act long-term, which is in the best interest of our
          customers.
        </p>
        <p className="text-black pt-4">
          <span className=" font-bold pr-2">Fully remote: </span>
          Empowered by Nuclino ourselves, we're a fully remote team.
        </p>
      </div>
    </div>
  );
};

export default TheTeamContent;
