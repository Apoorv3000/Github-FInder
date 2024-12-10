import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  //test

  return (
    <div className="bg-[#333] w-full h-[7vh] text-white px-4 py-0 md:px-8 flex items-center mb-8 ">
      <div
        onClick={handleClick}
        className="text-lg font-semibold cursor-pointer"
      >
        Go to Home
      </div>
    </div>
  );
};

export default Header;
