import React from "react";

const Repo = ({ repo }) => {
  return (
    <div className="w-full p-[1.2rem] mb-4 flex-col md:flex-row border-none rounded-[10px] flex md:items-center justify-between bg-[#333]">
      <div className="w-[50%] flex flex-col">
        <div className="font-bold text-[20px] w-[fit]">{repo?.name}</div>
        <div className="font-normal text-[16px] mt-[0.3rem]">
          {repo?.language}
        </div>
        <div className="flex  w-fit mt-1 flex-wrap">
          {repo?.topics?.map((topic) => (
            <div className="bg-[#111] mr-1 rounded-[10px] my-1 p-3 ">
              {topic}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[50%] flex-col lg:flex-row items-end justify-between lg:items-center">
        <div>
          <p className="font-normal text-[16px]">
            Stars :&nbsp;
            <span className="text-[#afa0a0] font-bold">
              {repo?.stargazers_count}
            </span>
          </p>
          <p className="font-normal text-[16px] ">
            Forks:&nbsp;
            <span className="text-[#afa0a0] font-bold">{repo?.forks}</span>
          </p>
        </div>
      </div>
      <a
        href={`${repo?.html_url}`}
        className=" no-underline w-[60%] md:w-[40%] mt-4 md:my-0 md:mr-[0.6rem] md:ml-0 lg:w-[12rem] h-[2.4rem] flex items-center justify-center rounded-[10px] bg-[#f5f5f5]"
      >
        <p className="text-[#111] text-[16px] font-bold">View More</p>
      </a>
    </div>
  );
};

export default Repo;
