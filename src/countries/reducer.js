import { SET_COUNTRIES } from './constants';

const countries = (state = [], action) => {
    switch (action.type) {
        case SET_COUNTRIES:
            return [...action.data];
        default:
            return state
    }
};

export default countries;
