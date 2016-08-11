import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
    render() {
        const { children, location } = this.props;

        return (
            <div>
                <div className="navbar navbar-default">
                    <div className="container">
                        <span className="navbar-brand">Restaurant Reviewer</span>
                        <span className="navbar-text navbar-right">
                            Location: <b>{location}</b> <Link to="/settings">(change)</Link>
                        </span>
                    </div>
                </div>
                <div className="container">
                    {children}
                </div>
            </div>
        );
    }
}
