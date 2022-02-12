import React from "react";

export default class ActionButton  extends React.Component {
    render () {
        const ActionButtonStyle = {
            border: 0,
            padding: '15px 18px',

            fontFamily: 'Mulish',
            fontSize: '14px',
            fontWeight: 700,
            lineHeight: '18px',
            letterSpacing: '0.30000001192092896px',
            color: '#FFFFFF',
            backgroundColor: '#3C64B1',
            cursor: 'pointer' ,
            marginTop: `${this.props.ActionButton.marginTop ? this.props.ActionButton.marginTop : 0}`
        }
        return (
            <button style={ActionButtonStyle}>
                {this.props.ActionButton.InnerText}
            </button>
        )
    }
}