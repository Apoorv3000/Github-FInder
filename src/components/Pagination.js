import React from "react";

const Pagination = ({ currentPage, setPage, totalPages }) => {
  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <div className="flex items-center justify-center">
      <button
        className="mx-[2px] my-[30px] bg-white px-4 p-2 font-semibold"
        onClick={handlePrev}
      >
        Prev
      </button>
      <h4 className="my-0 mx-[20px] text-white text-xl font-bold">
        {currentPage}
      </h4>
      <button
        className="mx-[2px] my-[30px]  bg-white px-4 p-2 font-semibold"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
