import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import RepoList from "../components/RepoList";
import UserCard from "../components/UserCard";
import { useGetReposQuery, useGetUserQuery } from "../services/githubApi";

const User = () => {
  const { username } = useSelector((state) => state.currentUser);
  const [page, setPage] = useState(1);
  const { data, isFetching, error } = useGetUserQuery({ username });

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageXOffset > 400) {
        setShowTopBtn(true);
        console.log("1");
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const {
    data: repos,
    isFetching: loading,
    error: fault,
  } = useGetReposQuery({ username, page });

  if (isFetching) {
    return (
      <div className="flex mt-2 justify-center">
        <Loading />
      </div>
    );
  }

  if (data?.length === 0 || error) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center text-lg mt-6">
          <h4 className="font-bold text-white">
            No UserName matches that developer <br /> Please Search for
            something else
          </h4>
        </div>
      </>
    );
  }
  const totalPages = Math.floor(data?.public_repos / 10) + 1;

  if (!error) {
    return (
      <div>
        <Header />
        <div className="flex lg:flex-row items-center lg:items-start flex-col p-5 lg:space-x-[4rem] ">
          <UserCard user={data} />
          <RepoList repos={repos} loading={loading} />
        </div>
        {showTopBtn && (
          <div
            onClick={goToTop}
            className="fixed py-4 px-6 rounded-md z-[1000] shadow-md text-[26px] bottom-10 right-10 bg-[#1f1c1c] font-bold text-white text-center"
          >
            ^
          </div>
        )}

        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
    );
  }
};

export default User;
