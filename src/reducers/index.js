import { combineReducers } from 'redux';
import {
    indexBy,
    prop,
    merge,
    map,
    assoc,
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
        default:
            return state;
    }
};

export default combineReducers({
    venues,
});
