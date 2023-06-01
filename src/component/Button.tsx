import React from "react";

type ButtonProps = {
  onClick: () => void; // Define a function type for the onClick prop
  text: string; // Define a string type for the text prop
};

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  // Use the ButtonProps in your functional component
  return (
    <button
      className="border border-black text-white bg-black mx-6 px-6 py-2 rounded-2xl hover:scale-110"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
