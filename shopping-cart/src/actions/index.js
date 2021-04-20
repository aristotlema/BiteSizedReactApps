export const addToCartAction = itemId => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            id: itemId
        }
    }
}