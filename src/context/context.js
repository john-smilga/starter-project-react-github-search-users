import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  console.log("running thru file");
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  // request loading
  const [isLoading, setIsloading] = useState(false);

  const [requests, setRequests] = useState("...");
  //erros
  const [error, setError] = useState({ show: false, msg: "" });

  // fetch user

  const searchGithubUser = async (user) => {
    toggleError();

    setIsloading(true);

    const resp = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(error)
    );

    if (resp) {
      setGithubUser(resp.data);

      const { login, followers_url } = resp.data;
      await Promise.allSettled([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios(followers_url + "?per_page=100"),
      ])
        .then((results) => {
          const [repos, followers] = results;
          const status = "fulfilled";
          if (repos.status === status) {
            setRepos(repos.value.data);
          }
          if (followers.status === status) {
            setFollowers(followers.value.data);
          }
        })
        .catch((err) => console.log(err));
    } else {
      toggleError(true, "there is no user with that username");
    }
    checkRequests();
    setIsloading(false);
  };

  // check rate

  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let remaining = data.rate.remaining;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, "sorry you have exceeded your hourl rate limit!!!");
        }
      })
      .catch((err) => console.log(err));
  };

  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }

  useEffect(checkRequests, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        setGithubUser,
        requests,
        error,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
