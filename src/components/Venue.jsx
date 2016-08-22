import React, { Component } from 'react';
import { take } from 'ramda';

import TipList from './TipList.jsx';

export default class Venue extends Component {
    render() {
        const { id, name, categories, location, hours, photos = [], tips } = this.props.venue;

        return (
            <div className="row">
                <main className="col-sm-4">
                    <div className="row row-gallery">
                        {take(4, photos).map((photo, i) =>
                            <div key={i} className="col-xs-3 col-sm-6 col-gallery">
                                <img
                                    className="img-responsive"
                                    src={photo ? photo.join('185x185') : null}
                                    alt={name}
                                />
                            </div>
                        )}
                    </div>
                    <h4>{name}</h4>
                    <div>{categories}</div>
                    <div>{location}</div>
                    <div>{hours}</div>
                </main>
                <aside className="col-sm-8">
                    {tips ? <TipList tips={tips} venueId={id} /> : null}
                </aside>
            </div>
        );
    }
}
