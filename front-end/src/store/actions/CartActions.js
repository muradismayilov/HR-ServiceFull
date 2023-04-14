
export const ADD_TO_CART ="ADD_TO_CART"
export const REMOVE_FROM_CART ="REMOVE_FROM_CART"

export function addToCart(employee){
    return {
        type:ADD_TO_CART,
        payload:employee
    }
}

export function removeFromCart(employee){
    return {
        type:REMOVE_FROM_CART,
        payload:employee
    }
}