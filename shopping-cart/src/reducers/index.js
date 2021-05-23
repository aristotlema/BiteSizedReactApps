import { combineReducers } from 'redux';

const initialState = {
    items: [
        {
            id: 1,
            model: 'IPhone 11',
            price: 699,
            image: 'https://cdn.mos.cms.futurecdn.net/tbhazi375tGfBzKPSBHVKZ.jpg',
            description: 'Tumblr succulents stumptown, cold-pressed artisan literally tousled. Normcore godard pabst, subway tile listicle raw denim migas narwhal.'
        },
        {
            id: 2,
            model: 'Galaxy S9+',
            price: 599,
            image: 'https://image.samsung.com/us/smartphones/galaxy-s9/phones/S9plus/Black/0213-GI-S9Plus-Black-Front-v01.jpg',
            description: 'Bespoke fam actually, normcore occupy gluten-free wayfarers hashtag iceland tote bag bushwick master cleanse everyday carry beard taxidermy.'
        },
        {
            id: 3,
            model: 'IPhone S20',
            price: 899,
            image: 'https://cdn0.vox-cdn.com/hermano/verge/product/image/9266/awhite_200223_3916_0217_squ.jpg',
            description: "Locavore VHS mumblecore, art party hexagon keytar lo-fi dreamcatcher truffaut chambray +1 forage chartreuse bicycle rights"
        },
        {
            id: 4,
            model: 'Google Pixel 4 XL',
            price: 359,
            image: 'https://i.pcmag.com/imagery/reviews/04R1s9xuQfmVH4MHFeuaghc-18..1570065414.jpg',
            description: 'Normcore godard pabst, subway tile listicle raw denim migas narwhal. Bespoke fam actually, normcore occupy gluten-free wayfarers'
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

            if(inCart) {
                return {
                    ...state,
                    cart: state.cart.map(item => item.id === action.payload.id 
                        ? {...item, qty: item.qty + 1} 
                        : item),
                    total: state.total + item.price
                };
            } else {
                return{
                    ...state,
                    cart: [...state.cart, {...item, qty: 1}],
                    total: state.total += item.price
                }
            }
        case 'REMOVE_FROM_CART':
            const removeItem = state.cart.find(prod => prod.id === action.payload.id);
            const removedItemTotal = removeItem.price * removeItem.qty;
            return{
                ...state,
                cart: state.cart.filter(item => item.id !== removeItem.id),
                total: state.total - removedItemTotal
            }
        case 'UPDATE_QTY':
            const updateItemQty = state.cart.find(item => item.id === action.payload.id);
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id
                ? {...item, qty: action.payload.value}
                : item)
            }
        default:
            return state;
    }
};

export default combineReducers({
    shop: shopReducer
});