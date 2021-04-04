import React from 'react';
import './DrinkList.scss';
import Link from './Link';

const DrinkList = ({ cocktailResults }) => {
    // Keep in one function for readability 
    const isCocktailResults = () => {
        if(!cocktailResults) {
            return <h1>No results found</h1>;
        } else if (cocktailResults.length > 0) {
            return cocktailResults.map(({ idDrink, strDrinkThumb, strDrink, strGlass }) => {
                return (
                    <div key={idDrink} className="drink-list-card">
                        <Link href="/details">
                            <img src={strDrinkThumb} alt={strDrink} className="drink-list-card-image"/>
                            <div className="drink-list-card-body">
                                <div className="card-title">{strGlass}</div>
                                <div className="card-drink-name">{strDrink}</div>
                                <button className="card-button">Details</button>
                            </div>
                        </Link>
                    </div>
                );
            });
        } else {
            return <h1>Something went wrong</h1>;
        }
    }

    return (
        <section className="drink-list">
            {isCocktailResults()}
        </section>
    );
};

export default DrinkList;