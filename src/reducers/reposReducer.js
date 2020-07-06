import { FETCH_REPOS, FETCH_MATCHED_REPOS } from './../actions/types';
const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_REPOS:
            return action.payload;

        case FETCH_MATCHED_REPOS:
            return action.payload;
    
        default:
            return state;
    }
}