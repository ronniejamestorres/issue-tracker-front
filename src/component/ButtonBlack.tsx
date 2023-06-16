import React from "react";

type ButtonProps = {
  onClick: () => void; // Define a function type for the onClick prop
  text: string; // Define a string type for the text prop
};

const ButtonBlack: React.FC<ButtonProps> = ({ onClick, text }) => {
  // Use the ButtonProps in your functional component
  return (
    <button
      className=" text-white bg-black mx-6 px-6 py-2 rounded-2xl hover:scale-110 w-32 "
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonBlack;
