import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
    pipe,
    always,
} from 'ramda';

import { addTip } from '../actions';

class AddTip extends Component {
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
            <form ref="root" onSubmit={e => this.onSubmit(e)}>
                <div className="form-group">
                    <label>Review</label>
                    <textarea ref="text" className="form-control" row="3" required />
                </div>
                <div className="form-group">
                    <label>Author</label>
                    <input ref="user" type="text" className="form-control" required />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onAddTip: pipe(
        addTip,
        dispatch
    ),
});

export default connect(always({}), mapDispatchToProps)(AddTip);
