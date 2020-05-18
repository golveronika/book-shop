
import filtersReducer from './filtersReducer';
import dataReducer from './dataReducer';
import dataFiltredReducer from './dataFiltredReducer';
import addToCartReducer from './addToCartReducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    data : dataReducer,
    filter: filtersReducer,
    dataFiltred: dataFiltredReducer,
    cart: addToCartReducer,
});

export default allReducers;
