import React, { Component } from 'react';
import {
    pipe,
    prop,
    props,
    join,
    objOf,
    merge,
} from 'ramda';

class Search extends Component {
    onSubmit(e) {
        const near = this.refs.locationInput.value.trim();
        const query = this.refs.nameInput.value.trim();

        if (near) this.pushToRouter({ near, query });
        else this.pushCurPosToRouter({ query });

        e.preventDefault();
    }
    pushCurPosToRouter(baseQuery) {
        const queryOf = pipe(
            prop('coords'),
            props(['latitude', 'longitude']),
            join(','),
            objOf('ll')
        );

        navigator.geolocation.getCurrentPosition(pipe(
            queryOf,
            merge(baseQuery),
            query => this.pushToRouter(query)
        ));
    }
    pushToRouter(query) {
        this.context.router.push({
            pathname: '/search',
            query,
        });
    }
    render() {
        const {
            currentLocation,
            currentName,
        } = this.props;

        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="locationInput">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nameInput"
                        ref="nameInput"
                        defaultValue={currentName}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="locationInput">Location</label>
                    <input
                        type="text"
                        className="form-control"
                        id="locationInput"
                        ref="locationInput"
                        placeholder="Near me"
                        defaultValue={currentLocation}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        );
    }
}

Search.contextTypes = {
    router: React.PropTypes.object,
};

export default Search;
