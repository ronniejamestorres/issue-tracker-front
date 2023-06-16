import React from "react";
import mapimage from "../images/map.svg";

const LocationContent: React.FC = () => {
  return (
    <div className="h-fit bg-white pt-28 lg:pt-10 p-4 grid grid-cols-1 lg:grid-cols-2 ">
      <div className=" col-span-1 lg:col-span-1 pt-8 lg:pt-40">
        <p
          style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
          className="text-2xl pb-4 text-black"
        >
          Location
        </p>
        <p className="text-black pt-8">
          Nestled in the heart of a serene and lush forest, the enterprise's
          location is a unique blend of modern architecture and natural beauty.
        </p>
        <p className="text-black pt-4">
          The eco-friendly building, with its glass walls and sleek lines,
          harmoniously merges with the verdant surroundings. Tall, ancient trees
          stand as sentinels around the compound, their leaves rustling with the
          wind, offering an idyllic backdrop for creativity and innovation.
        </p>
        <p className="text-black pt-4">
          The sight of deer grazing in the nearby meadow and the sounds of
          chirping birds imbue the workspace with a tranquil, inspiring
          ambiance, making it a haven for the company's employees.
        </p>
        <div className=" col-span-1 lg:col-span-1 pt-8 lg:pt-0 items-center font-bold justify-center">
          <img src={mapimage} alt="pets" className="" />
          <p className="text-black p-8  ">
            123 Forest Lane,Greenwood, CA, 95560United States
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationContent;
