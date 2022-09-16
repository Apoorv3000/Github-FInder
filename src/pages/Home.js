import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import bgDark from "../assets/bgDark.svg";
import { searchUser } from "../redux/currentUserReducer";

const Home = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    dispatch(searchUser(username));
    navigate("/user");
  };

  return (
    <>
      <div className="w-[70vw] mx-20 mt-10 flex flex-col md:my-[12vw]">
        <p className="font-bold text-[70px] text-white">GitHub Finder</p>
        <p className="w-[90%] mt-[1.2rem] font-normal text-[24px] md:w-[50%] text-white">
          Your website to find programmers quickly and easily!
        </p>
        <p className="text-white font-semibold text-[18px] md:mt-[9rem] md:mb-4 mt-[9rem] mx-auto mb-4 md:mx-0 ">
          Enter the developer name below
        </p>
        <div className="md:w-[70%] w-[90%] flex flex-col md:flex-row items-center justify-between rounded-[10px] mx-auto md:mx-0">
          <input
            type="text"
            className="px-2 py-4 border-none md:rounded-tl-[10px]  md:rounded-bl-[10px] md:rounded-tr-0 md:rounded-br-0 font-normal text-[1.2rem] w-[95%] bg-[#333] text-white"
            placeholder="ex: adrianhajdin"
            value={username}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="border-none cursor-pointer  mt-4 hover:opacity-80 bg-[#f5f5f5]
           text-[#111111] 
           font-normal text-[1rem] 
           w-[13rem] flex items-center
            justify-center p-[20px] h-[3.8rem]
            md:rounded-tl-0 md:rounded-bl-0 md:rounded-tr-[10px] md:rounded-br-[10px] md:mt-0
            "
            onClick={handleSubmit}
          >
            Find
          </button>
        </div>
      </div>
      <div className="w-[45vw] fixed right-[200%] md:right-[-23%] top-[4vw]">
        <img src={bgDark} />
      </div>
    </>
  );
};

export default Home;
