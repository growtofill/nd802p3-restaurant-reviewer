import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import {
    prop,
    pipe,
    always,
    path,
    map,
} from 'ramda';

import { venues } from '../apis/foursquare';
import {
    addVenues,
    hideAllVenues,
} from '../actions';

import App from '../components/App.jsx';
import Explore from '../components/Explore.jsx';
import Venues from '../components/Venues.jsx';

class AppRouter extends Component {
    render() {
        const { explore } = this.props;

        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute components={{ main: null, aside: Explore }} />
                    <Route
                        path="/explore"
                        components={{ main: Venues, aside: Explore }}
                        onEnter={explore}
                        onChange={(_, nextState) => explore(nextState)}
                    />
                    <Route path="/venues/:venueId" component={null} />
                </Route>
            </Router>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    explore({ location }) {
        dispatch(hideAllVenues());
        venues.explore(location.query)
            .then(pipe(
                path(['response', 'groups', 0, 'items']),
                map(prop(['venue'])),
                addVenues,
                dispatch
            ));
    },
});

export default connect(always({}), mapDispatchToProps)(AppRouter);
