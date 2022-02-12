import React from "react";

import ActionButton from "../ActionButton/ActionButton";

export default class ArticleText extends React.Component {
    render () {
        
        const ArticleTextStyle = {
            display: 'grid',
            justifyItems: 'center'
        }
        const ArticleText__H3Style = {
            maxWidth: `${this.props.ArticleText.h3.maxWidth ? this.props.ArticleText.h3.maxWidth : 'none'}`,
            fontFamily: 'Mulish',
            fontSize: '32px',
            fontWeight: 700,
            lineHeight: '40px',
            letterSpacing: '0.10000000149011612px',
            color: '#373F41'
        }
        const ArticleText__PStyle = {
            maxWidth: `${this.props.ArticleText.p.maxWidth ? this.props.ArticleText.p.maxWidth : 'none' }` ,
            marginTop: `${this.props.ArticleText.p.marginTop}`,
            fontFamily: 'Mulish',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '22px',
            letterSpacing: '0.30000001192092896px',
            color: '#737B7D'
        }

        return (
            <article style={ArticleTextStyle}>
                <h3 style={ArticleText__H3Style}>{this.props.ArticleText.h3.InnetText}</h3>
                <p style={ArticleText__PStyle}>{this.props.ArticleText.p.InnetText}</p>
                <ActionButton {...this.props} />
            </article>
        )
    }
}