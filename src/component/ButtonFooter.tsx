import React from "react";

type ButtonProps = {
  onClick: () => void; // Define a function type for the onClick prop
  text: string; // Define a string type for the text prop
};

const ButtonFooter: React.FC<ButtonProps> = ({ onClick, text }) => {
  // Use the ButtonProps in your functional component
  return (
    <button className=" text-gray mx-2 hover:scale-110" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonFooter;
