import React, { Component } from 'react';
import { filter } from 'ramda';

import Filter from '../containers/Filter';
import VenueList from '../containers/VenueList';

export default class Browser extends Component {
    onFilter(filterQuery) {
        const { router } = this.context;
        const { pathname } = this.props.location;
        const query = filter(Boolean, filterQuery);

        router.push({ pathname, query });
    }
    render() {
        const { query } = this.props.location;

        return (
            <div className="row">
                <aside className="col-sm-4">
                    <Filter
                        query={query}
                        onFilter={filterQuery => this.onFilter(filterQuery)}
                    />
                </aside>
                <main className="col-sm-8">
                    <VenueList query={query} />
                </main>
            </div>
        );
    }
}

Browser.contextTypes = {
    router: React.PropTypes.object,
};
