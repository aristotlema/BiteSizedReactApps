import React from 'react';
import { connect } from 'react-redux';

const Cart = ({ cart }) => {
    const renderCart = () => {
        if(cart.length <= 0){
            return <div>No Items in cart</div>; 
        }
        else if(cart.length > 0) {
            return cart.map(item => {
                return <div>{item.id}</div>
            });
        } 
        else {
            return <div>Error</div>;
        }
    } 

    return <div>{renderCart()}</div>;
};

const mapStateToProps = state => {
    return { 
        cart: state.shop.cart
    };
};

export default connect(mapStateToProps, {
})(Cart);