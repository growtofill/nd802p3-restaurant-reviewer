import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    prop,
    pipe,
    always
} from 'ramda';

import { addVenue } from '../actions';
import { venues } from '../apis/foursquare';

class Explore extends Component {
    render () {
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="locationInput">Location</label>
                    <input
                        type="text"
                        className="form-control"
                        id="locationInput"
                        ref="locationInput"
                        defaultValue="Kyiv"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Explore</button>
            </form>
        );
    }
    onSubmit(e) {
        const near = this.refs.locationInput.value;

        this.props.onExplore({ near });
        e.preventDefault();
    }
}

const mapDispatchToProps = dispatch => ({
    onExplore({ near }) {
        venues.explore({ near })
            .then(data => {
                data.response.groups[0].items
                    .forEach(pipe(
                        prop(['venue']),
                        addVenue,
                        dispatch
                    ));
            });
    }
})

export default connect(always({}), mapDispatchToProps)(Explore);
