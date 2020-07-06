import { FETCH_REPOS } from './types';
import githubApi from './../apis/github';

const fetchRepos = (username, page) => {
    const response = githubApi.get(`${username}/repos?page=${page}&per_page=5`);

    return {
        type: FETCH_REPOS,
        payload: response
    }
}

export { fetchRepos };