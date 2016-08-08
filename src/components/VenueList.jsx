import React, { Component } from 'react';
import { Link } from 'react-router';
import { values } from 'ramda';

export default class Venues extends Component {
    render() {
        const { venues } = this.props;

        return (
            <div className="venue-list">
                {values(venues).map(({ id, name, categories, location }) =>
                    <div className="media" key={id}>
                        <div className="media-body">
                            <h4 className="media-heading">
                                <Link to={`/venues/${id}`}>{name}</Link>
                            </h4>
                            <div>{categories}</div>
                            <div>{location}</div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
