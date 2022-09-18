import React from "react";
import { Link, NavLink } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="text-white w-[90%] items-center md:flex-col md:w-[50%] p-6 rounded-[10px] flex flex-col mb-12 bg-[#333] h-fit xl:w-[30%]  ">
      <div className="  my-0 mx-auto bg-[#111] rounded-[20%] w-[12rem] h-[12rem]">
        <img src={user?.avatar_url} alt="" className="rounded-[20%]" />
      </div>
      <h4 className="border-none font-bold text-[26px] mt-4 mx-auto mb-0">
        {user?.name}
      </h4>
      <p className="border-none font-bold text-[20px] mt-[0.3rem] mx-auto mb-0">
        @{user?.login}
      </p>
      <div className="flex items-center flex-row justify-evenly w-full ">
        <h4 className="border-none font-bold text-[18px] mt-[1.2rem] ">
          <span className="text-[#d6d1d1]">Followers:</span> {user?.followers}
        </h4>
        <p className="border-none font-bold text-[18px] mt-[1.2rem] ">
          <span className="text-[#d6d1d1]">Following:</span> {user?.following}
        </p>
      </div>
      <div className="my-2">
        <p className="border-none font-bold  text-[18px] mt-[1.2rem] ">
          <span className="text-[#9e9a9a]">Public Repositories : </span>
          {user?.public_repos}
        </p>
        <h4 className="border-none font-bold my-2 text-[18px] ">
          {" "}
          <span className="text-[#9e9a9a]">Bio : </span>
          {user?.bio}
        </h4>
        <h4 className="border-none font-bold text-[18px]  mb-[1.2rem]">
          <span className="text-[#9e9a9a]">Location : </span>
          {user?.location}
        </h4>
      </div>
      <a
        href={`https://twitter.com/${user?.twitter_username}`}
        className="no-underline font-bold mx-auto"
      >
        <span className="text-[#d6d1d1]">Twitter :</span> @
        {user?.twitter_username}
      </a>
      <a
        href={`${user?.html_url}`}
        className="mx-auto mt-8 bg-white px-4 p-2 font-semibold rounded-[10px] cursor-pointer text-[#000] hover:opacity-70"
      >
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
