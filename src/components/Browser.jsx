import React, { Component } from 'react';

import Filter from '../containers/Filter';
import VenueList from '../containers/VenueList';

export default class Browser extends Component {
    render() {
        const { pathname, query } = this.props.location;
        const {
            query: searchQuery,
            categoryId,
            near,
        } = pathname === '/search' ? query : {};

        return (
            <div className="row">
                <div className="col-sm-4">
                    <Filter
                        currentQuery={searchQuery}
                        currentCategoryId={categoryId}
                        currentNear={near}
                    />
                </div>
                <div className="col-sm-8">
                    <VenueList />
                </div>
            </div>
        );
    }
}
