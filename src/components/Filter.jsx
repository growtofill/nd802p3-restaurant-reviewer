import React, { Component } from 'react';
import {
    pipe,
    prop,
    props,
    join,
    objOf,
    merge,
    toPairs,
} from 'ramda';

export default class Filter extends Component {
    onSubmit(e) {
        const near = this.refs.near.value.trim();
        const query = this.refs.query.value.trim();
        const categoryId = this.refs.categoryId.value;

        if (near) this.pushToRouter({ near, query, categoryId });
        else this.pushCurPosToRouter({ query, categoryId });

        e.preventDefault();
    }
    pushCurPosToRouter(baseQuery) {
        const queryOf = pipe(
            prop('coords'),
            props(['latitude', 'longitude']),
            join(','),
            objOf('ll')
        );

        navigator.geolocation.getCurrentPosition(pipe(
            queryOf,
            merge(baseQuery),
            query => this.pushToRouter(query)
        ));
    }
    pushToRouter(query) {
        this.context.router.push({
            query,
        });
    }
    render() {
        const {
            currentQuery,
            currentNear,
            currentCategoryId,
            categories,
        } = this.props;

        return (
            <form className="search" onSubmit={e => this.onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="query">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="query"
                        ref="query"
                        defaultValue={currentQuery}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="categoryId">Cousine</label>
                    <select
                        id="categoryId"
                        ref="categoryId"
                        className="form-control"
                        defaultValue={currentCategoryId}
                    >
                        <option value="">Any</option>
                        {toPairs(categories).map(([id, name]) =>
                            <option key={id} value={id}>{name}</option>
                        )}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="near">Location</label>
                    <input
                        type="text"
                        className="form-control"
                        id="near"
                        ref="near"
                        placeholder="Near me"
                        defaultValue={currentNear}
                    />
                </div>
                <button type="submit" className="btn btn-default">Filter</button>
            </form>
        );
    }
}

Filter.contextTypes = {
    router: React.PropTypes.object,
};
