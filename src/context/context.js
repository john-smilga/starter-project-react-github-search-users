import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({children}) => {
    
    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);

    // request loading
    const [requests, setRequests] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    // error
    const [error, setError] = useState({ show: false, msg: '' });

    // serach API

    const searchGitHubUser = async(user) => {
        // toggle error
        toggleError();

        // actual API request
        const response = await axios(`${rootUrl}/users/${user}`).catch(err=>console.log(err))
    
        if (response){
            // user details
            setGithubUser(response.data);

            const {login, followers_url} = response.data;
            
            // make sure all data is loaded before displayed 
    
            await Promise.allSettled([
                axios(`${rootUrl}/users/${login}/repos?per_page=100`), 
                axios(`${followers_url}?per_page=100`),
            ]).then((results) => {
                const [repos, followers] = results;
                const status = 'fulfilled';

                if (repos.status=== status){
                    setRepos(repos.value.data);
                }

                if (followers.status=== status){
                    setFollowers(followers.value.data);
                }
            });

        }else{
            toggleError(true, 'There is no user with that name');
        }
    
        checkRequests();
        setIsLoading(false);
    };

    // check rate
    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`)
            .then(({data})=>{
            let {
                rate:{remaining},
            } = data;

            setRequests(remaining);

            if (remaining === 0){
                toggleError(true, 'Sorry you have reached your limit!');
            }
        }).catch((err)=>console.log(err));
    };

    function toggleError(show, msg){
        setError({ show, msg });
    }

    // error
    useEffect(checkRequests,[]);


    return (
        <GithubContext.Provider value={{githubUser, repos, followers, requests, searchGitHubUser, isLoading}}>
            {children}
        </GithubContext.Provider>
    );
};

export{GithubProvider, GithubContext};
