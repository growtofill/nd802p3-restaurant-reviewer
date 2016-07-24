import React, { Component } from 'react';

import Search from './Search.jsx';
import VenueList from './VenueList.jsx';

export default class Browser extends Component {
    render() {
        const { pathname, query } = this.props.location;
        const currentLocation = pathname === '/search' ? query.near : null;

        return (
            <div className="row">
                <div className="col-sm-4">
                    <Search currentLocation={currentLocation} />
                </div>
                <div className="col-sm-8">
                    <VenueList />
                </div>
            </div>
        );
    }
}
