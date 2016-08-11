import React, { Component } from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import App from '../containers/App';
import Browser from './Browser.jsx';
import Venue from '../containers/Venue';
import Welcome from '../containers/Welcome';

export default class AppRouter extends Component {
    render() {
        const { search, venues, categories, reset, location } = this.props;

        return (
            <Router history={hashHistory}>
                <Route path="/" component={App} onEnter={categories}>
                    <IndexRedirect to={`/locations/${location}`} />
                    <Route
                        path="/settings"
                        component={Welcome}
                        onEnter={reset}
                    />
                    <Route
                        path="/locations/:location"
                        component={Browser}
                        onEnter={search}
                        onChange={(_, nextState) => search(nextState)}
                    />
                    <Route
                        path="/venues/:venueId"
                        component={Venue}
                        onEnter={venues}
                        onChange={(_, nextState) => venues(nextState)}
                    />
                </Route>
            </Router>
        );
    }
}
