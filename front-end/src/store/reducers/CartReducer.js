import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/CartActions";
import { cartItems } from "../initial values/cartItems";

const initialState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let employee = state.cartItems.find((c) => c.employee.id === payload.id);
      if (employee) {
        employee.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { quantity: 1, employee: payload }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.employee.id !== payload.id),
      };

    default:
      return state;
  }
}
