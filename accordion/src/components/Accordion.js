import React from 'react';
import AccordionItem from './AccordionItem';
import './Accordion.css';

const Accordion = ({ listItems }) => {
    const renderedList = listItems.map((item, index) => {
        return(
            <AccordionItem title={item.title} body={item.body} key={index}/>
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