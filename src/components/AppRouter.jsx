import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import {
    prop,
    pipe,
    always,
    path,
    map,
    of,
} from 'ramda';

import { venues as venuesApi } from '../apis/foursquare';
import {
    addVenues,
    hideAllVenues,
} from '../actions';

import App from './App.jsx';
import Browser from './Browser.jsx';
import VenueContainer from './VenueContainer.jsx';

class AppRouter extends Component {
    render() {
        const { explore, venues } = this.props;

        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Browser} />
                    <Route
                        path="/explore"
                        component={Browser}
                        onEnter={explore}
                        onChange={(_, nextState) => explore(nextState)}
                    />
                    <Route
                        path="/venues/:venueId"
                        component={VenueContainer}
                        onEnter={venues}
                        onChange={(_, nextState) => venues(nextState)}
                    />
                </Route>
            </Router>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    explore({ location }) {
        dispatch(hideAllVenues());
        venuesApi.explore(location.query)
            .then(pipe(
                path(['response', 'groups', 0, 'items']),
                map(prop('venue')),
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
});

export default connect(always({}), mapDispatchToProps)(AppRouter);
