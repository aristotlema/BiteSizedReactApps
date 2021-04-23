import React from 'react';
import './Cart.scss';
import { connect } from 'react-redux';
import { removeFromCartAction } from '../actions';

const Cart = ({cart, removeFromCart, total}) => {
    const renderCart = () => {
        if(cart.length <= 0){
            return <div>No Items in cart</div>; 
        }
        else if(cart.length > 0) {
            return cart.map(item => {
                return (
                <div key={item.id}className="cart-card">
                    <div className="cart-image">
                        <img src={item.image} alt={item.model} />
                    </div>
                   
                    <div className="cart-details">
                        <h2>{item.model}</h2>
                        <p>${item.price}</p>
                        <p>{item.description}</p>
                    </div>
                    <div className="card-controls">
                        <input value={item.qty} />
                        <button 
                            onClick={() => removeFromCart(item.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
                );
            });
        } 
        else {
            return <div>Error</div>;
        }
    } 

    return (
        <div>
            
            <div className="cart">
                <h1>Cart</h1>
                <div>
                    {total}
                </div>
                {renderCart()}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { 
        cart: state.shop.cart,
        total: state.shop.total
    };
};

export default connect(mapStateToProps, {
    removeFromCart: removeFromCartAction
})(Cart);