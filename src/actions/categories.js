import {
    pipe,
    flatten,
    uniq,
    map,
    pick,
    objOf,
    merge,
} from 'ramda';

export const addCategories = pipe(
    flatten,
    uniq,
    map(pick(['id', 'shortName'])),
    objOf('categories'),
    merge({ type: 'ADD_CATEGORIES' })
);
