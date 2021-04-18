import React from 'react';
import './ItemList.scss';
import { connect } from 'react-redux';

const ItemList = (props) => {
    console.log(props);
    
    const renderItems = props.items.map(item => {
        return (
            <div className="item-card">
                <img src={item.image} />
                <div className="item-card-details">
                    <h4>{item.model}</h4>
                    <div>${item.price}</div>
                </div>
                <button>Add To Cart</button>
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
    return { items: state.items };
};


export default connect(mapStateToProps, {

})(ItemList);