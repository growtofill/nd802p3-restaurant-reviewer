import React, { Component } from 'react';

import TipList from './TipList.jsx';

export default class Venue extends Component {
    render() {
        const { id, name, categories, location, hours, photos, tips } = this.props.venue;

        return (
            <div className="row">
                <div className="col-sm-4">
                    <img
                        src={photos ? photos.join('293x293') : null}
                        alt={name}
                        width="293"
                        height="293"
                    />
                    <h4>{name}</h4>
                    <div>{categories}</div>
                    <div>{location}</div>
                    <div>{hours}</div>
                </div>
                <div className="col-sm-8">
                    {tips ? <TipList tips={tips} venueId={id} /> : null}
                </div>
            </div>
        );
    }
}
