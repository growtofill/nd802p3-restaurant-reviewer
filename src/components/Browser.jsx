import React, { Component } from 'react';

import Explore from './Explore.jsx';
import VenueList from './VenueList.jsx';

export default class Browser extends Component {
    render() {
        const { pathname, query } = this.props.location;
        const currentLocation = pathname === '/explore' ? query.near : null;

        return (
            <div className="row">
                <div className="col-sm-4">
                    <Explore currentLocation={currentLocation} />
                </div>
                <div className="col-sm-8">
                    <VenueList />
                </div>
            </div>
        );
    }
}
