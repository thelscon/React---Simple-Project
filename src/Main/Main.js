import React from "react";

import ArticleText from "../ArticleText/ArticleText.js";
import './Main.css' ;
import img1 from './img1.svg' ;

export default class Main extends React.Component {
    render () {
        return (
            <main className="Main">
                <ArticleText {...this.props}/>
                <img className="Main__img" src={img1}></img>
            </main>
        )
    }
}