import React from 'react';
import './GroceryBud.css';

const groceryList = ["Eggs", "Bacon"];

const GroceryBud = () => {
    const clearItemsButton = <button>Clear Items</button>;

    const renderedItems = groceryList.map(( item, index ) => {
        return( 
            <div key={index} className="grocery-item">
                <div className="grocery-name">
                    {item}
                </div>
                <div className="icons">
                    <i className="edit icon"></i>
                    <i className="trash alternate icon"></i>
                </div>
            </div>
        );
    });

    return (
        <div className="grocery-bud">
            <h2 className="grocery-bud-title">Grocery Bud</h2>
            <div className="grocery-bud-input">
                <input type="text" />
                <button>Submit</button>
            </div>
            <div className="grocery-list">
                {renderedItems}
            </div>
            <div className="clear-items-button">
                {clearItemsButton}
            </div>
        </div>
    );
};

export default GroceryBud;