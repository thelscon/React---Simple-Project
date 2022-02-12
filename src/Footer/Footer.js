import React from "react";

import GetStarted from "./GetStarted/GetStarted";
import AllRightsReserved from "./AllRightsReserved/AllRightsReserved";

import './Footer.css' ;

export default class Footer extends React.Component {
    render () {
        return (
            <footer className="Footer">
                <GetStarted {...this.props} />
                <AllRightsReserved/>
            </footer>
        )
    }
}