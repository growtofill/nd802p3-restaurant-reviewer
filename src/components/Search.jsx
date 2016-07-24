import React, { Component } from 'react';
import {
    pipe,
    prop,
    props,
    join,
    objOf,
} from 'ramda';

class Search extends Component {
    onSubmit(e) {
        const near = this.refs.locationInput.value;

        if (near) this.pushToRouter({ near });
        else this.pushCurPosToRouter();

        e.preventDefault();
    }
    pushCurPosToRouter() {
        const queryOf = pipe(
            prop('coords'),
            props(['latitude', 'longitude']),
            join(','),
            objOf('ll')
        );

        navigator.geolocation.getCurrentPosition(pipe(
            queryOf,
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
        const { currentLocation } = this.props;

        return (
            <form onSubmit={e => this.onSubmit(e)}>
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
