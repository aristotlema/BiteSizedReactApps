import React, { useState, useRef } from 'react';
import './AccordionItem.css';

const AccordionItem = ({title, body, index}) => {
    const [isActive, setIsActive] = useState(false);
    const [setHeight, setHeightState] = useState('0px');

    const content = useRef(null);

    const toggleActive = () => {
        if(isActive === false) {
            setIsActive(true);
            setHeightState(`${content.current.scrollHeight}px`);
            
        } else {
            setIsActive(false);
            setHeightState('0px');
        }
    };

    return (
        <>
            <div className="listItem" onClick={() => toggleActive()}>
                <div className="itemTitle">
                    {title}
                </div>
                <div ref={content} style={{maxHeight: `${setHeight}`}} className="itemContent">
                    <div className={`itemText `}>
                        {body}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccordionItem;
