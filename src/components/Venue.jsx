import React, { Component } from 'react';

export default class Venue extends Component {
    render() {
        const { name } = this.props.venue;

        return (
            <div className="row">
                <div className="col-sm-4">
                    {name}
                </div>
                <div className="col-sm-8">

                </div>
            </div>
        );
    }
}
