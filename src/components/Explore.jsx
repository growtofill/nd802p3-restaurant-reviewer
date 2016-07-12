import React, { Component } from 'react';

class Explore extends Component {
    onSubmit(e) {
        const near = this.refs.locationInput.value;

        this.context.router.push({
            pathname: '/explore',
            query: { near },
        });
        e.preventDefault();
    }
    render() {
        const { pathname, query } = this.props.location;
        const currentLocation = pathname === '/explore' ? query.near : null;

        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="locationInput">Location</label>
                    <input
                        type="text"
                        className="form-control"
                        id="locationInput"
                        ref="locationInput"
                        defaultValue={currentLocation}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Explore</button>
            </form>
        );
    }
}

Explore.contextTypes = {
    router: React.PropTypes.object,
};

export default Explore;
