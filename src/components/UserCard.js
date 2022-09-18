import React from "react";

const UserCard = ({ user }) => {
  console.log(user);

  return (
    <div className="text-white w-[90%] items-center md:flex-col md:w-[50%] p-6 rounded-[10px] flex flex-col mb-12 bg-[#333] h-fit xl:w-[30%] md:items-baseline ">
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
          Followers: {user?.followers}
        </h4>
        <p className="border-none font-bold text-[18px] mt-[1.2rem] ">
          Following: {user?.following}
        </p>
      </div>
      <p>Public Repositories:{user?.public_repos}</p>
      <h4>{user?.bio}</h4>
      <h4>{user?.location}</h4>
      <p>Twitter:{user?.twitter_username}</p>
    </div>
  );
};

export default UserCard;
