export const addToCartAction = itemId => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            id: itemId
        }
    }
}

export const removeFromCartAction = itemId => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            id: itemId
        }
    }
}

export const updateQuantityAction = (itemId, value) => {
    return {
        type: 'UPDATE_QTY',
        payload: {
            id: itemId,
            value
        }
    } 
}