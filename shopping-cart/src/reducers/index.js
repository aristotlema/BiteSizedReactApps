import { combineReducers } from 'redux';

const initialState = {
    items: [
        {
            id: 1,
            model: 'IPhone 11',
            price: 699,
            image: 'https://cdn.mos.cms.futurecdn.net/tbhazi375tGfBzKPSBHVKZ.jpg'
        },
        {
            id: 2,
            model: 'Galaxy S9+',
            price: 599,
            image: 'https://image.samsung.com/us/smartphones/galaxy-s9/phones/S9plus/Black/0213-GI-S9Plus-Black-Front-v01.jpg'
        },
        {
            id: 3,
            model: 'IPhone S20',
            price: 899,
            image: 'https://cdn0.vox-cdn.com/hermano/verge/product/image/9266/awhite_200223_3916_0217_squ.jpg'
        },
        {
            id: 4,
            model: 'Google Pixel 4 XL',
            price: 359,
            image: 'https://i.pcmag.com/imagery/reviews/04R1s9xuQfmVH4MHFeuaghc-18..1570065414.jpg'
        }
    ],
    cart: [],
    total: 0
};


const shopReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            const item = state.items.find(prod => prod.id === action.payload.id);
            const inCart = state.cart.find(item => item.id === action.payload.id);
            console.log(inCart);

            if(inCart) {
                // item.qty + 1;
                return {
                    ...state,
                    cart: state.cart.map(item => item.id === action.payload.id 
                        ? {...item, qty: item.qty + 1} 
                        : item),
                    // cart: {...item, qty: newQty},
                    total: state.total + item.price
                };
            } else {
                return{
                    ...state,
                    cart: [...state.cart, {...item, qty: 1}],
                    total: state.total += item.price
                }
            }
        default:
            return state;
    }
};

export default combineReducers({
    shop: shopReducer
});