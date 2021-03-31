import React, { useState } from 'react';
import './GroceryBud.css';

const GroceryBud = () => {
    const [enteredItem, setEnteredItem] = useState('Shampoo');
    const [groceryList, setGroceryList] = useState(["Eggs", "Bacon"]);
    // False for creating grocery item, true for editing
    const [inputType, setInputType] = useState(false);
    const [indexOfEditItem, setIndexOfEditItem] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        //New item
        if(inputType === false) {
            setGroceryList(groceryList => [...groceryList, enteredItem]);
            setEnteredItem('');
            console.log("item added to list");
        }
        // Updating Item
        else if(inputType === true) {
            let groceryArray = [...groceryList];
            groceryArray[indexOfEditItem] = enteredItem;
            setGroceryList(groceryArray);
            setIndexOfEditItem(null);
            setInputType(false);
            setEnteredItem('');
        } 
        else {
            console.log("There was a problem");
        }
    };

    const removeItem = (index) => {
        let groceryArray = [...groceryList];
        if(index >= 0 && index < groceryArray.length) {
            groceryArray.splice(index, 1);
            setGroceryList(groceryArray);
        } else {
            console.log("error");
        }
    };

    // Handles button click of edit item icon, updating of grocery array is only done with handleInput
    const editItem = (index) => {
        console.log(index);
        setInputType(true);
        setEnteredItem(groceryList[index]);
        setIndexOfEditItem(index);
    };
    const clearItems = () => {
        setGroceryList([]);
    };


    const clearItemsButton = () => { 
        let groceryArray = [...groceryList]
        if([groceryArray.length] > 0) {
            return <button onClick={clearItems}>Clear Items</button>;
        } else {
            return <span></span>;
        }
    }

    const inputFieldDisplay = () => {
        if(inputType === true) {
            return <button className="edit-btn" type="submit">Edit</button>;
        } 
        else if(inputType === false) {
            return <button type="submit">Submit</button>;
        } 
    };

    const renderedItems = groceryList.map(( item, index ) => {
        return( 
            <div key={index} className="grocery-item">
                <div className="grocery-name">
                    {item}
                </div>
                <div className="icons">
                    <i onClick={() => editItem(index)} className="edit icon"></i>
                    <i onClick={() => removeItem(index)} className="trash alternate icon"></i>
                </div>
            </div>
        );
    });

    return (
        <div className="grocery-bud">
            <h2 className="grocery-bud-title">Grocery Bud</h2>
            <form onSubmit={(e) => handleSubmit(e)} className="grocery-bud-input">
                <input 
                    type="text" 
                    value={enteredItem}
                    onChange={(e) => setEnteredItem(e.target.value)}
                />
                {inputFieldDisplay()}
            </form>
            <div className="grocery-list">
                {renderedItems}
            </div>
            <div className="clear-items-button">
                {clearItemsButton()}
            </div>
        </div>
    );
};

export default GroceryBud;