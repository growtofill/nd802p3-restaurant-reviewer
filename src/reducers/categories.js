import { merge } from 'ramda';

export default function categories(state = {}, action) {
    switch (action.type) {
        case 'ADD_CATEGORIES':
            return merge(state, action.categories);
        default:
            return state;
    }
}
