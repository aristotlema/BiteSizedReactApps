import React from 'react';
import './DrinkList.scss';

const DrinkList = ({ cocktailResults }) => {
    const renderedItems = cocktailResults.map(({ idDrink, strDrinkThumb, strDrink, strGlass}) => {
        return (
            <div key={idDrink} className="drink-list-card">
                <img src={strDrinkThumb} alt={strDrink} className="drink-list-card-image"/>
                <div className="drink-list-card-body">
                    <div className="card-title">{strGlass}</div>
                    <div className="card-drink-name">{strDrink}</div>
                    <button className="card-button">Details</button>
                </div>
            </div>
        );
    });

    return (
        <section className="drink-list">
            {renderedItems}
        </section>
    );
};

export default DrinkList;