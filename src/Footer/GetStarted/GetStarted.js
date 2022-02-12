import React from "react";

import ArticleText from "../../ArticleText/ArticleText";
import './GetStarted.css' ;

export default class GetStarted extends React.Component {
    render () {
        return (
            <section className="GetStarted">
                <ArticleText {...this.props}/>
            </section>
        )
    }
} 