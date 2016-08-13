import React, { Component } from 'react';
import moment from 'moment';

import AddTip from '../containers/AddTip';

const newestFirst = (a, b) => b.createdAt - a.createdAt;

export default class TipList extends Component {
    render() {
        const { tips, venueId } = this.props;

        return (
            <div>
                <AddTip venueId={venueId} />
                <ul className="tip-list">
                    {tips.sort(newestFirst).map(({ id, text, user, createdAt, visibility }) =>
                        <li className="media tip-list-item" key={id}>
                            <div className="media-body">
                                <h4 className="media-heading">{user}</h4>
                                <div>
                                    <small>
                                        {moment.unix(createdAt).format('MMMM D, YYYY')}
                                        {visibility === 'private' ? ' · Private' : null}
                                    </small>
                                </div>
                                <div>{text}</div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}
