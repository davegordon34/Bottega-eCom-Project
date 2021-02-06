import {
    //SET_SHOP_CATEGORIES
} from '../actions/types';

const INTITAL_STATE = {
    categories: [],
    selectedCategoryID: 0,
    productsSelected: []
}

export default function(state = INTITAL_STATE, action) {
    switch (action.tpye) {
        // case SET_SHOP_CATEGORIES:
        //     return {
        //         ...state,
        //         categories: action.payload
        //     }
        default: return state;
    }
}