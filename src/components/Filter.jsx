import React, { Component } from 'react';

export default class Filter extends Component {
    onSubmit(e) {
        const location = this.refs.near.value.trim();
        const name = this.refs.query.value.trim();
        const categories = this.refs.categoryId.value;

        this.props.onFilter({ name, location, categories });

        e.preventDefault();
    }
    render() {
        const {
            query,
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
                        defaultValue={query.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="categoryId">Cousine</label>
                    <select
                        id="categoryId"
                        ref="categoryId"
                        className="form-control"
                        defaultValue={query.category}
                    >
                        <option value="">Any</option>
                        {categories.map(({ id, shortName }) =>
                            <option key={id} value={shortName}>{shortName}</option>
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
                        defaultValue={query.address}
                    />
                </div>
                <button type="submit" className="btn btn-default">Filter</button>
            </form>
        );
    }
}
