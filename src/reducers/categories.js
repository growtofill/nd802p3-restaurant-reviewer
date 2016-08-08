import {
    pipe,
    concat,
    uniq,
} from 'ramda';

export default function categories(state = [], action) {
    switch (action.type) {
        case 'ADD_CATEGORIES':
            return pipe(
                concat(action.categories),
                uniq
            )(state);
        default:
            return state;
    }
}
