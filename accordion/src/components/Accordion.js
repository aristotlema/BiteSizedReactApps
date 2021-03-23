import React from 'react';
import './Accordion.css';

const Accordion = ({ listItems }) => {
    const renderedList = listItems.map(({title, body}) => {
        return(
            <div className="listItem">
                {title}
            </div>
        );
    });
    return(
        <div className="accordion">
            <h2 className="title">
                Questions And Answers About Login
            </h2>
            <div className="listItems">
                {renderedList}
            </div>
        </div>
    );
};

export default Accordion;