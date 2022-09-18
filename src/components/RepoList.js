import React from "react";

import Loading from "./Loading";
import Repo from "./Repo";

const RepoList = ({ repos, loading }) => {
  if (loading) {
    return (
      <div className="flex mt-2 justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="text-white flex flex-col w-full">
      {repos?.map((repo) => (
        <Repo key={repo?.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
