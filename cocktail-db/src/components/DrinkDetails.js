import React from 'react';
import Link from './Link';
import Button from './Button';
import './DrinkDetails.scss';

const DrinkDeatails = ({ selectedCocktail }) => {
    console.log(selectedCocktail);
    return (
        <section className="drink-details">
            <Link href="/">
                <Button buttonTitle="Return Home"></Button>
            </Link>
            <h1 className="drink-details-title">{selectedCocktail.strDrink}</h1>
            <div className="drink-details-image">
                <img src={selectedCocktail.strDrinkThumb} alt={selectedCocktail.strDrink} />
            </div>
        </section>
        
    );
};  

export default DrinkDeatails;