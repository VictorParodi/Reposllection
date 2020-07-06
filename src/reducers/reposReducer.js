import { FETCH_REPOS } from './../actions/types';
const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_REPOS:
            return action.payload;
    
        default:
            return state;
    }
}