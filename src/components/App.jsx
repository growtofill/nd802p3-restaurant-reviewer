import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
    render() {
        const { children, location } = this.props;

        return (
            <div>
                <header className="navbar bg-primary">
                    <div className="container">
                        <div
                            className="navbar-brand"
                            role="heading"
                            aria-level="1"
                        >
                            <Link to={`/locations/${location}`}>
                                Restaurant Reviewer
                            </Link>
                        </div>
                        <div className="navbar-text navbar-right">
                            <Link to="/settings">{location}</Link>
                        </div>
                    </div>
                </header>
                <div className="container">
                    {children}
                </div>
            </div>
        );
    }
}
