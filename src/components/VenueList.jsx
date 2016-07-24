import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {
    pipe,
    pick,
    evolve,
    values,
    filter,
    prop,
} from 'ramda';

class Venues extends Component {
    render() {
        const { venues } = this.props;

        return (
            <div>
                {venues.map(({ id, name, categories, location }) =>
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

const mapStateToProps = pipe(
    pick(['venues']),
    evolve({
        venues: pipe(
            filter(prop('visible')),
            values
        ),
    })
);

export default connect(mapStateToProps)(Venues);
