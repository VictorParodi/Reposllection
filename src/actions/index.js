import _sortBy from 'lodash/reverse';
import { FETCH_REPOS, NEXT_PAGE, BACK_PAGE, GIT_USER } from './types';
import githubApi from './../apis/github';

const fetchRepos = (username, page, sort, header) => {
    return async (dispatch) => {
        try {
            const response = await githubApi.get(`${username}/repos?page=${page}&per_page=5`);
            const data = sort && header? _sortBy(response.data, [header]) : response.data;

            dispatch({
                type: FETCH_REPOS,
                payload: data
            });
        } catch (error) {
            alert(`${error}. Maybe the Github username is incorrect`);
        }
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