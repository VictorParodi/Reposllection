import _reverse from 'lodash/reverse';
import _filter from 'lodash/filter';
import _includes from 'lodash/includes';
import _toLower from 'lodash/toLower';
import _take from 'lodash/take';
import {
    FETCH_REPOS,
    NEXT_PAGE,
    BACK_PAGE,
    GIT_USER,
    FETCH_MATCHED_REPOS
} from './types';
import githubApi from './../apis/github';

const fetchRepos = (username, page, sort, header) => {
    return async (dispatch) => {
        try {
            const response = await githubApi.get(`${username}/repos?page=${page}&per_page=5`);
            const data = sort && header? _reverse(response.data, [header]) : response.data;

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

const fetchMatchedRepos = (pattern) => {
    return async (dispatch, getState) => {
        try {
            const response = await githubApi.get(`${getState().gitUser}/repos?per_page=100`);

            const data = _filter(response.data, (repo) => {
                return _includes(_toLower(repo.name), _toLower(pattern));
            });

            const repos = _take(data, 5);

            dispatch({
                type: FETCH_MATCHED_REPOS,
                payload: repos
            });
        } catch (error) {
            alert(error);
        }
    }
}

export { fetchRepos, goToNextPage, goToBackPage, fetchGitUser, fetchMatchedRepos};