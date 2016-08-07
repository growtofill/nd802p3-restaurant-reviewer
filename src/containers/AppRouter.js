import { connect } from 'react-redux';
import {
    pipe,
    always,
    path,
    of,
    map,
    prop,
} from 'ramda';

import AppRouter from '../components/AppRouter.jsx';
import { venues as venuesApi } from '../apis/foursquare';
import { addVenues } from '../actions/venues';
import { addCategories } from '../actions/categories';

const mapDispatchToProps = dispatch => ({
    search({ params }) {
        venuesApi.explore({ near: params.location })
            .then(data => {
                const { items } = data.response.groups[0];

                pipe(
                    map(prop('venue')),
                    addVenues,
                    dispatch
                )(items);

                pipe(
                    map(path(['venue', 'categories'])),
                    addCategories,
                    dispatch
                )(items);
            });
    },
    venues({ params }) {
        venuesApi.venues(params.venueId)
            .then(pipe(
                path(['response', 'venue']),
                of(),
                addVenues,
                dispatch
            ));
    },
});

export default connect(always({}), mapDispatchToProps)(AppRouter);
