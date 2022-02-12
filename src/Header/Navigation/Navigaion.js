import React from "react";

import './Navigation.css' ;

export default class Navigation extends React.Component {
    render () {
        return (
            <nav className="Navigation Header__Navigation">
                <a className="Navigation__a">Home</a>
                <a className="Navigation__a">Features</a>
                <a className="Navigation__a">Process</a>
                <a className="Navigation__a">Discover</a>
                <a className="Navigation__a">Feedback</a>
            </nav>
        )
    }
}