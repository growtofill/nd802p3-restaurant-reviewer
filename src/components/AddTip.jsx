import React, { Component } from 'react';
import moment from 'moment';

export default class AddTip extends Component {
    onSubmit(e) {
        const { venueId } = this.props;
        const tip = {
            text: this.refs.text.value,
            user: this.refs.user.value,
            createdAt: moment().unix(),
            visibility: 'private',
        };
        this.props.onAddTip({ tip, venueId });

        this.refs.root.reset();
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
