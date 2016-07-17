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
    props(['prefix', 'suffix'])
);

const tips = pipe(
    path(['groups', 0, 'items']),
    map(pipe(
        pick([
            'id',
            'text',
            'user',
            'createdAt',
        ]),
        evolve({
            user: pipe(
                props(['firstName', 'lastName']),
                join(' ')
            ),
        })
    ))
);

const toPlainVenue = pipe(
    pick([
        'id',
        'name',
        'categories',
        'location',
        'hours',
        'photos',
        'tips',
    ]),
    evolve({
        categories,
        location: prop(['address']),
        hours: prop(['status']),
        photos,
        tips,
    }),
    merge({ visible: true })
);

export const addVenues = pipe(
    map(toPlainVenue),
    objOf('venues'),
    merge({ type: 'ADD_VENUES' })
);

export const hideAllVenues = always({ type: 'HIDE_ALL_VENUES' });
