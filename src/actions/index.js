import {
    pipe,
    map,
    prop,
    join,
    path,
    props,
    pick,
    evolve,
    objOf,
    merge,
    always,
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

const toPlainVenue = pipe(
    pick([
        'id',
        'name',
        'categories',
        'location',
        'hours',
        'photos',
    ]),
    evolve({
        categories,
        location: prop(['address']),
        hours: prop(['status']),
        photos,
    }),
    merge({ visible: true })
);

export const addVenues = pipe(
    map(toPlainVenue),
    objOf('venues'),
    merge({ type: 'ADD_VENUES' })
);

export const hideAllVenues = always({ type: 'HIDE_ALL_VENUES' });
