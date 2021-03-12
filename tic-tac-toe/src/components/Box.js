import React from 'react';
import './Box.css'

class Box extends React.Component {
    handleClick = (e) => {
        if(this.props.boxDisplay === '')
        {
            this.props.updateBox(this.props.index);
        } else {
            console.log("That box was already picked");
        }
    };
    render() {
        return (
        <div className="box" onClick={this.handleClick}>
            {this.props.boxDisplay}
        </div>);
    }
}

export default Box;