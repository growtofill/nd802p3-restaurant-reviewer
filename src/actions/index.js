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
    })
);

export const replaceVenues = pipe(
    map(toPlainVenue),
    objOf('venues'),
    merge({ type: 'REPLACE_VENUES' })
);
