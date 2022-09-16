import React from "react";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import { useGetUserQuery } from "../services/githubApi";

const User = () => {
  const { username } = useSelector((state) => state.currentUser);

  const { data, isFetching, error } = useGetUserQuery({ username });
  console.log(data);

  if (isFetching) {
    <Loading />;
  }

  if (data?.length == 0 || error) {
    return (
      <div className="flex items-center justify-center text-lg mt-6">
        <h4 className="font-bold text-white">
          No UserName matches that developer <br /> Please Search for something
          else
        </h4>
      </div>
    );
  }

  if (!error) {
    return <div className="text-white">{data?.name}</div>;
  }
};

export default User;
