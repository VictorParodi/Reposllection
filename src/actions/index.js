import { FETCH_REPOS, NEXT_PAGE, BACK_PAGE, GIT_USER } from './types';
import githubApi from './../apis/github';

const fetchRepos = (username, page) => {
    const response = githubApi.get(`${username}/repos?page=${page}&per_page=5`);

    return {
        type: FETCH_REPOS,
        payload: response
    }
}

const goToNextPage = (page) => {
    return {
        type: NEXT_PAGE,
        payload: page
    }
}

const goToBackPage = (page) => {
    return {
        type: BACK_PAGE,
        payload: page
    }
}

const fetchGitUser = (gitUser) => {
    return {
        type: GIT_USER,
        payload: gitUser
    }
}

export { fetchRepos, goToNextPage, goToBackPage, fetchGitUser };