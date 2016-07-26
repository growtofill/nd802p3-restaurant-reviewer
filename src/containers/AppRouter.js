import { connect } from 'react-redux';
import {
    pipe,
    always,
    path,
    of,
    propEq,
    find,
} from 'ramda';

import AppRouter from '../components/AppRouter.jsx';
import { venues as venuesApi } from '../apis/foursquare';
import {
    addVenues,
    hideAllVenues,
    setCategory,
} from '../actions';

const mapDispatchToProps = dispatch => ({
    search({ location }) {
        dispatch(hideAllVenues());
        venuesApi.search(location.query)
            .then(pipe(
                path(['response', 'venues']),
                addVenues,
                dispatch
            ));
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
    categories() {
        venuesApi.categories()
            .then(pipe(
                path(['response', 'categories']),
                find(propEq('name', 'Food')),
                setCategory,
                dispatch
            ));
    },
});

export default connect(always({}), mapDispatchToProps)(AppRouter);
