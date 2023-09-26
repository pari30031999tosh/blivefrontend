import { createStore } from 'redux';

const storeReducer = (state = {cartItems: []}, action) => {
    if(action.type == 'ADD_TO_CART'){
        return {
            cartItems: [...state.cartItems, action.val]
        }
    }

    if(action.type == 'REMOVE_CART_ITEM'){
        let newarray = state.cartItems.filter((m) => m.id != action.val);

        return {
            cartItems: newarray
        }
    }

    return  state;
}

const store = createStore(storeReducer)

export default store;