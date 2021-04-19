import React from 'react';
import { connect } from 'react-redux';

const Cart = ({ cart, addedIds }) => {
    const renderCart = addedIds.map(item => {
        return <div>{item}</div>
    });
    return <div>{renderCart}</div>;
};

const mapStateToProps = state => {
    return { 
        cart: state.cart, 
        addedIds: state.addedIds
    };
};

export default connect(mapStateToProps, {
})(Cart);