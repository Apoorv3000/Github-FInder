import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="text-white w-[90%] items-center md:flex-col md:w-[50%] p-6 rounded-[10px] flex flex-col mb-12 bg-[#333] h-fit xl:w-[30%] md:items-baseline ">
      <div>
        <img src={user?.avatar} alt="" />
      </div>
      <h4>{user?.name}</h4>
      <p>@{user?.login}</p>
      <div>
        <h4>Followers: {user?.followers}</h4>
        <p>Following:{user?.following}</p>
      </div>
      <p>Public Repositories:{user?.public_repos}</p>
      <h4>{user?.bio}</h4>
      <h4>{user?.location}</h4>
      <p>Twitter:{user?.twitter_username}</p>
    </div>
  );
};

export default UserCard;
