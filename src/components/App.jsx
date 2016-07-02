import React, { Component } from 'react';

import Explore from '../containers/Explore.jsx';
import Venues from '../containers/Venues.jsx';

export default class App extends Component {
    render () {
        return (
            <div>
                <div className="navbar navbar-default">
                    <div className="container">
                        <span className="navbar-brand">Restaurant Reviewer</span>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <Explore />
                        </div>
                        <div className="col-sm-8">
                            <Venues />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
