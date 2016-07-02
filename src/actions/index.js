import {
    pick,
    merge,
    pipe,
    map,
    join,
    evolve,
    prop,
    path,
    props
} from 'ramda';

const categories = pipe(
    map(prop(['shortName'])),
    join(', ')
);

const photos = pipe(
    path(['groups', 0, 'items', 0]),
    props(['prefix', 'suffix']),
    join('64x64')
);

export const addVenue = pipe(
    pick([
        'name',
        'categories',
        'location',
        'hours',
        'photos'
    ]),
    evolve({
        categories,
        location: prop(['address']),
        hours: prop(['status']),
        photos
    }),
    merge({ type: 'ADD_VENUE' })
);
