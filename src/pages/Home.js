import React, { useState } from "react";

const Home = () => {
  const [username, setUsername] = useState();

  const handleChange = () => {};

  return (
    <>
      <div className="w-[70vw] mx-20 mt-10 flex flex-col md:my-[12vw]">
        <p className="font-bold text-[70px] text-white">GitHub Finder</p>
        <p className="w-[90%] mt-[1.2rem] font-normal text-[24px] md:w-[50%] text-white">
          Your website to find programmers quickly and easily!
        </p>
        <p className="text-white font-semibold text-[18px] md:mt-[9rem] md:mx-auto md:mb-4 mt-[9rem] mx-0 mb-4 ">
          Enter the developer name below
        </p>
        <form className="md:w-[70%] w-[90%] flex flex-col md:flex-row items-center justify-between rounded-[10px]">
          <input
            type="text"
            className="px-2 py-4 border-none md:rounded-tl-[10px]  md:rounded-bl-[10px] md:rounded-tr-0 md:rounded-br-0 font-normal text-[1.2rem] w-[95%] bg-[#333] text-white rounded-[10px] "
            placeholder="ex: adrianhajdin"
            value={username}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="border-none cursor-pointer rounded-[10px] mt-4 hover:opacity-80 bg-[#f5f5f5]
           text-[#111111] 
           font-normal text-[1rem] 
           w-[13rem] flex items-center
            justify-center p-[20px] h-[2.8rem]
            md:rounded-tl-0 md:rounded-bl-0 md:rounded-tr-[10px] md:rounded-br-0 md:mt-0
            "
          >
            Find
          </button>
        </form>
      </div>
      <div>img</div>
    </>
  );
};

export default Home;
