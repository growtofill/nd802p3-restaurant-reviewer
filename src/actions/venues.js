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
    defaultTo,
    pathOr,
} from 'ramda';

const categories = pipe(
    map(prop(['shortName'])),
    join(', ')
);

const photos = pipe(
    pathOr([], ['groups', 0, 'items']),
    map(props(['prefix', 'suffix']))
);

const tips = pipe(
    path(['groups', 0, 'items']),
    defaultTo([]),
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
        }),
        merge({ visibility: 'public' })
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

export const addTip = merge({ type: 'ADD_TIP' });
