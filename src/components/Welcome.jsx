import React, { Component } from 'react';
const defaultCity = 'Kyiv';

export default class Welcome extends Component {
    onSubmit(e) {
        const near = this.refs.city.value.trim() || defaultCity;

        this.pushToRouter({ near });
        e.preventDefault();
    }
    pushToRouter(query) {
        this.context.router.push({
            pathname: '/search',
            query,
        });
    }
    render() {
        return (
            <form className="form-horizontal" onSubmit={e => this.onSubmit(e)}>
                <div className="form-group form-group-lg">
                    <label
                        className="col-sm-3 col-md-4 control-label welcome-label welcome-form-group"
                        htmlFor="formGroupInputLarge"
                    >
                        City
                    </label>
                    <div className="col-sm-6 col-md-4 welcome-form-group">
                        <input
                            className="form-control"
                            type="text"
                            id="formGroupInputLarge"
                            ref="city"
                            placeholder={defaultCity}
                        />
                    </div>
                    <div className="col-sm-3 col-md-4">
                        <button
                            className="btn btn-primary btn-lg welcome-form-group"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

Welcome.contextTypes = {
    router: React.PropTypes.object,
};
