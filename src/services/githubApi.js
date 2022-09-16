import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/users/" }),
  endpoints: (builder) => ({
    //get user by username
    getUser: builder.query({
      query: ({ username }) => `${username}`,
    }),

    //get repos
    getRepos: builder.query({
      query: ({ username, page }) => {
        return `${username}/repos?page=${page}&per_page=10&sort=-1`;
      },
    }),
  }),
});

export const { useGetUserQuery, useGetReposQuery } = githubApi;
