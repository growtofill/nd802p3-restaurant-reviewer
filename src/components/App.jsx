import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
    render() {
        const { children, location } = this.props;

        return (
            <div>
                <div className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link to={`/locations/${location}`}>
                                Restaurant Reviewer
                            </Link>
                        </div>
                        <div className="navbar-text navbar-right">
                            <Link to="/settings">{location}</Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    {children}
                </div>
            </div>
        );
    }
}
