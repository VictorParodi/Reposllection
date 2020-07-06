import { GIT_USER } from './../actions/types';
let INTIAL_STATE = '';

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case GIT_USER:
            return action.payload;
    
        default:
            return state;
    }
}