import React, { Component } from 'react';

export default class App extends Component {
    render() {
        const { children } = this.props;

        return (
            <div>
                <div className="navbar navbar-default">
                    <div className="container">
                        <span className="navbar-brand">Restaurant Reviewer</span>
                    </div>
                </div>
                <div className="container">
                    {children}
                </div>
            </div>
        );
    }
}
