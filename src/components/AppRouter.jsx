import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App.jsx';
import Browser from './Browser.jsx';
import Venue from '../containers/Venue';
import Welcome from './Welcome.jsx';

export default class AppRouter extends Component {
    render() {
        const { search, venues, categories } = this.props;

        return (
            <Router history={hashHistory}>
                <Route path="/" component={App} onEnter={categories}>
                    <IndexRoute component={Welcome} />
                    <Route
                        path="/search"
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
