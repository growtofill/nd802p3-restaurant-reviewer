import {
    pipe,
    flatten,
    uniq,
    map,
    props,
    fromPairs,
    objOf,
    merge,
} from 'ramda';

export const addCategories = pipe(
    flatten,
    uniq,
    map(props(['id', 'name'])),
    fromPairs,
    objOf('categories'),
    merge({ type: 'ADD_CATEGORIES' })
);
