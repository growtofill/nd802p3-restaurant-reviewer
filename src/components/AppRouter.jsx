import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import {
    pipe,
    always,
    path,
    of,
    propEq,
    find,
} from 'ramda';

import { venues as venuesApi } from '../apis/foursquare';
import {
    addVenues,
    hideAllVenues,
    setCategory,
} from '../actions';

import App from './App.jsx';
import Browser from './Browser.jsx';
import VenueContainer from './VenueContainer.jsx';

class AppRouter extends Component {
    render() {
        const { search, venues, categories } = this.props;

        return (
            <Router history={hashHistory}>
                <Route path="/" component={App} onEnter={categories}>
                    <IndexRoute component={Browser} />
                    <Route
                        path="/search"
                        component={Browser}
                        onEnter={search}
                        onChange={(_, nextState) => search(nextState)}
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
