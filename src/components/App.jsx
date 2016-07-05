import React, { Component } from 'react';

export default class App extends Component {
    render () {
        const { main, aside } = this.props;

        return (
            <div>
                <div className="navbar navbar-default">
                    <div className="container">
                        <span className="navbar-brand">Restaurant Reviewer</span>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">{aside}</div>
                        <div className="col-sm-8">{main}</div>
                    </div>
                </div>
            </div>
        );
    }
}
