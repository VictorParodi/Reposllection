import { NEXT_PAGE, BACK_PAGE } from './../actions/types';
let INITAL_STATE = 1;

export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case NEXT_PAGE:
            return action.payload >= 1 ? action.payload + 1 : action.payload;

        case BACK_PAGE:
            return action.payload === 1 ? action.payload : action.payload - 1;
    
        default:
            return state;
    }
} 