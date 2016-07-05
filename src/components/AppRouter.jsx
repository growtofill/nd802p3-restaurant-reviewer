import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import {
    prop,
    pipe,
    always
} from 'ramda';

import { venues } from '../apis/foursquare';
import { addVenue } from '../actions';

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
                        />
                    <Route path="/venues/:venueId" component={null} />
                </Route>
            </Router>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    explore({ location }) {
        venues.explore(location.query)
            .then(data => {
                data.response.groups[0].items
                    .forEach(pipe(
                        prop(['venue']),
                        addVenue,
                        dispatch
                    ));
            });
    }
});

export default connect(always({}), mapDispatchToProps)(AppRouter);
