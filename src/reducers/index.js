import { assoc } from 'ramda';

const initialState = {
    venues: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'REPLACE_VENUES':
            return assoc('venues', action.venues, state);
        default:
            return state;
    }
};
