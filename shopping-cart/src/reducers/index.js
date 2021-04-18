import { combineReducers } from 'redux';

const itemsReducer = () => {
    return [
        {
            model: 'IPhone 11',
            price: 699,
            image: 'https://cdn.mos.cms.futurecdn.net/tbhazi375tGfBzKPSBHVKZ.jpg'
        },
        {
            model: 'Galaxy S9+',
            price: 599,
            image: 'https://image.samsung.com/us/smartphones/galaxy-s9/phones/S9plus/Black/0213-GI-S9Plus-Black-Front-v01.jpg'
        },
        {
            model: 'IPhone S20',
            price: 899,
            image: 'https://cdn0.vox-cdn.com/hermano/verge/product/image/9266/awhite_200223_3916_0217_squ.jpg'
        },
        {
            model: 'Google Pixel 4 XL',
            price: 359,
            image: 'https://i.pcmag.com/imagery/reviews/04R1s9xuQfmVH4MHFeuaghc-18..1570065414.jpg'
        }
    ];
};

export default combineReducers({
    items: itemsReducer
});