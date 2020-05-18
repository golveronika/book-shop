
import filtersReducer from './filtersReducer';
import dataReducer from './dataReducer';
import dataFiltredReducer from './dataFiltredReducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    data : dataReducer,
    filter: filtersReducer,
    dataFiltred: dataFiltredReducer,
});

export default allReducers;
