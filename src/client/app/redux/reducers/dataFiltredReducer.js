
const dataFiltredReducer = ( state = [], action ) => {
    console.log(action);
    switch (action.type) {
        case 'SET_DATA_FILTER': 

        console.log(filter);
            const {data, filter} = action
            let new_state = data;
            if (filter.length > 0) {
                new_state = new_state.filter(item => filter.includes(item.group))
            }
            return new_state;
        default :
            return state;
    }
} 

export default dataFiltredReducer;