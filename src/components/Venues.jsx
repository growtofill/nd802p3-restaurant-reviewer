import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'ramda';

class Venues extends Component {
    render () {
        const { venues } = this.props;

        return (
            <div>
                {venues.map(({ name, categories, location, hours, photos }, index) =>
                    <div className="media" key={index}>
                        <div className="media-left">
                            <img className="media-object" src={photos} alt={name} width="64" height="64"/>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">{name}</h4>
                            <div>{categories}</div>
                            <div>{location}</div>
                            <div>{hours}</div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default connect(pick(['venues']))(Venues);
