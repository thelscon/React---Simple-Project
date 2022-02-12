import React from "react";

import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigaion";
import Login from "./Login/Login";

import './Header.css' ;

export default class Header extends React.Component {
    render () {
        return (
            <header className="Header">
                <Logo/>
                <Navigation/>
                <Login/>
            </header>
        )
    }

}