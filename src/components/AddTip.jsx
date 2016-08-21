import React, { Component } from 'react';
import moment from 'moment';

import Rate from './Rate.jsx';

export default class AddTip extends Component {
    componentDidMount() {
        const { root, rating } = this.refs;
        root.addEventListener('reset', () => rating.reset());
    }
    onSubmit(e) {
        const { venueId, onAddTip } = this.props;
        const { text, user, rating, root } = this.refs;
        const tip = {
            text: text.value,
            user: user.value,
            createdAt: moment().unix(),
            visibility: 'private',
            rating: rating.value,
        };

        onAddTip({ tip, venueId });

        root.reset();
        e.preventDefault();
    }
    render() {
        return (
            <form className="form" ref="root" onSubmit={e => this.onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="review">Review</label>
                    <textarea
                        id="review"
                        ref="text"
                        className="form-control"
                        row="3"
                        required
                    />
                </div>
                <div className="form-group">
                    <label id="rating">Rating</label>
                    <div>
                        <Rate ref="rating" labeledBy="rating" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="user">Author</label>
                    <input
                        id="user"
                        ref="user"
                        type="text"
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        );
    }
}
