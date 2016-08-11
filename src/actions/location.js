import {
    pipe,
    objOf,
    merge,
} from 'ramda';

export const setLocation = pipe(
    objOf('location'),
    merge({ type: 'SET_LOCATION' })
);
