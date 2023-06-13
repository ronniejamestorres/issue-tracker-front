import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

interface PaginationButtonsProps {
  nextPage: () => void;
  previousPage: () => void;
  canGoBack: boolean;
  canGoForward: boolean;
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  nextPage,
  previousPage,
  canGoBack,
  canGoForward,
}) => {
  return (
    <div className="flex justify-between">
      {canGoBack && (
        <div
          className="justify-center flex p-4 h-fit w-fit  text-white cursor-pointer bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 rounded-2xl hover:scale-105"
          onClick={previousPage}
        >
          <GrPrevious color="white" />
        </div>
      )}
      {canGoForward && (
        <div
          className="justify-center flex p-4 h-fit w-fit  text-white cursor-pointer bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 rounded-2xl hover:scale-105 "
          onClick={nextPage}
        >
          <GrNext color="white" />
        </div>
      )}
    </div>
  );
};

export default PaginationButtons;
