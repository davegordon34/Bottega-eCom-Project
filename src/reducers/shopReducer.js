import {
    SET_SHOP_CATEGORIES,
    SET_SHOP_PRODUCTS,
    FILTERED_PRODUCTS_WITH_ID
} from '../actions/types';

const INITIAL_STATE = {
    categories: [],
    productsSelected: [],
    products: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_SHOP_CATEGORIES:
            const categories = action.payload;
            return {
                ...state,
                categories
            }
        case SET_SHOP_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case FILTERED_PRODUCTS_WITH_ID:
            console.log(action.payload);
            return {
                ...state,
                //selectedCategoryID
            }
        default: return state;
    }
}