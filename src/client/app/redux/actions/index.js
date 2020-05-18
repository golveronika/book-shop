
import axios from 'axios'

export const delFromCart = (id_art) => {
    return {
        type: 'DEL_FROM_CART',
        id_art,
    }
}

export const addToCart = (article) => {
    return {
        type: 'ADD_TO_CART',
        article,
    }
}

export const setDataFiltred = (filter, data) => {
    return {
        type: 'SET_DATA_FILTER',
        filter,
        data,
    }
}

export const setFilter = (filter) => {
    return {
        type: 'SET_FILTER',
        filter,
    }
}

export const fethData = (payload) => {
    return {
        type: 'FETCH_DATA',
        payload,
    }
}

export const fethDataAsync = () => {
    return (dispatch, getState) => {
        axios.get("http://localhost:8080/getData")
            .then(response => {
                const {filter} = getState()
                dispatch(fethData(response.data))
                dispatch(setDataFiltred(filter, response.data))
            }).catch(error => {
                dispatch(fethData({
                    Error: error,
                    Success: false
                }))
            })
    }

}