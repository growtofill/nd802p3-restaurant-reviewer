import React, { Component } from 'react';
import moment from 'moment';

export default class TipList extends Component {
    render() {
        const { tips } = this.props;

        return (
            <div>
                {tips.map(({ id, text, user, createdAt }) =>
                    <div className="media" key={id}>
                        <div className="media-body">
                            <h4 className="media-heading">{user}</h4>
                            <div>{text}</div>
                            <div>
                                <i>{moment.unix(createdAt).format('MMMM D, YYYY')}</i>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
