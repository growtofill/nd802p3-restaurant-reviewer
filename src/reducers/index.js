import { combineReducers } from 'redux';
import {
    indexBy,
    prop,
    merge,
    map,
    assoc,
    over,
    lensPath,
    append,
} from 'ramda';

const venues = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_VENUES':
            return merge(
                state,
                indexBy(prop('id'), action.venues)
            );
        case 'HIDE_ALL_VENUES':
            return map(
                assoc('visible', false),
                state
            );
        case 'ADD_TIP':
            return over(
                lensPath([action.venueId, 'tips']),
                append(action.tip),
                state
            );
        default:
            return state;
    }
};

export default combineReducers({
    venues,
});
