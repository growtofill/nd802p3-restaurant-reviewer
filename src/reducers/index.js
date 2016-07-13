import { combineReducers } from 'redux';
import {
    indexBy,
    prop,
} from 'ramda';

const venues = (state = {}, action) => {
    switch (action.type) {
        case 'REPLACE_VENUES':
            return indexBy(
                prop('id'),
                action.venues
            );
        default:
            return state;
    }
};

export default combineReducers({
    venues,
});
