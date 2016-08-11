import React, { Component } from 'react';

export default class Welcome extends Component {
    componentDidMount() {
        this.refs.location.focus();
    }
    onSubmit(e) {
        const location = this.refs.location.value.trim();
        this.setLocation(location);
        e.preventDefault();
    }
    setLocation(location) {
        const pathname = `/locations/${location}`;
        this.context.router.push({ pathname });
        this.props.setLocation(location);
    }
    render() {
        const { location } = this.props;

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
                            ref="location"
                            defaultValue={location}
                            required
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
