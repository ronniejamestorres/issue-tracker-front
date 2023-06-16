import React from "react";
import profile1 from "../images/profile1.svg";
import profile2 from "../images/profile2.svg";
import profile3 from "../images/profile3.svg";

const TheTeamContent: React.FC = () => {
  return (
    <div className="lg:h-screen bg-white pt-28 lg:pt-10 p-4 grid grid-cols-1 lg:grid-cols-3 ">
      <p className="text-2xl pb-4 text-black lg:col-span-3 col-span-1">
        Meet the team
      </p>
      <div className="pt-8 lg:pt-0 border items-center flex lg:col-span-1 col-span-1 w-40">
        <img src={profile1} alt="pets" className="" />
        <p className="border">Emily Richmond Chief Executive Officer (CEO)</p>
      </div>
      <div className="pt-8 lg:pt-0 border items-center flex lg:col-span-1 col-span-1 w-40">
        <img src={profile2} alt="pets" className="" />
        <p>Thomas "Tom" Bennett Chief Financial Officer (CFO)</p>
      </div>
      <div className="pt-8 lg:pt-0 border items-center flex lg:col-span-1 col-span-1 w-40">
        <img src={profile3} alt="pets" className="" />
        <p>Alexander "Alex" Stevens Chief Technology Officer (CTO)</p>
      </div>
      <div className=" border pt-8 lg:pt-40 col-span-1 lg:col-span-3">
        <p className="text-black pt-8">
          Independent: We're a profitable, growing, and fully founder-owned
          company. This helps us to focus on our customers instead of pleasing
          investors or chasing yet another funding round.
        </p>
        <p className="text-black pt-4">
          6+ years and growing: We're in this for the long run. Due to our
          independence and setup, we can think and act long-term, which is in
          the best interest of our customers.
        </p>
        <p className="text-black pt-4">
          Fully remote: Empowered by Nuclino ourselves, we're a fully remote
          team.
        </p>
      </div>
    </div>
  );
};

export default TheTeamContent;
