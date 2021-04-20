import React from 'react';
import './ItemList.scss';
import { connect } from 'react-redux';
import { addToCartAction } from '../actions';

const ItemList = (props) => {
    const renderItems = props.items.map(item => {
        return (
            <div key={item.model} className="item-card">
                <img src={item.image} alt={item.model} />
                <div className="item-card-details">
                    <h4>{item.model}</h4>
                    <div>${item.price}</div>
                </div>
                <button
                    onClick={() => props.addToCart(item.id)}
                >
                    Add To Cart
                </button>
            </div>
        );
    });

    return (
        <section className="item-list">
            <h2>Shop Our Items</h2>
            <div className="items-list">
                {renderItems}
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    return { items: state.shop.items };
};


export default connect(mapStateToProps, {
    addToCart: addToCartAction
})(ItemList);