import { combineReducers } from 'redux';
import reposReducer from './reposReducer';
import pageReducer from './pageReducer';
import gitUserReducer from './gitUserReducer';

export default combineReducers({
    repos: reposReducer,
    page: pageReducer,
    gitUser: gitUserReducer
});