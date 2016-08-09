import {
    indexBy,
    prop,
    merge,
    over,
    lensPath,
    append,
} from 'ramda';

export default function venues(state = {}, action) {
    switch (action.type) {
        case 'ADD_VENUES':
            return merge(
                state,
                indexBy(prop('id'), action.venues)
            );
        case 'REMOVE_VENUES':
            return {};
        case 'ADD_TIP':
            return over(
                lensPath([action.venueId, 'tips']),
                append(action.tip),
                state
            );
        default:
            return state;
    }
}
