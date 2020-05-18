
const addToCartReducer = ( state = {articles: [], summary: 0, count: 0}, action ) => {

    let new_state = state.articles
    let new_count = 0;
    let new_summ = 0;

    switch (action.type) {
        case 'ADD_TO_CART': 

            const current_article = state.articles.filter(item => item.id === action.article.article.id)

            if (current_article.length === 0) {
                //If don`t have this product in shopping cart
                new_state.push({
                    id: action.article.article.id,
                    name: action.article.article.name,
                    count: 1,
                    max_count: action.article.max_count,
                    price: action.article.article.price_USD
                })
            }  else {
                // If the product is already in the shopping cart
                new_state = new_state.map(item => {
                    let new_item = item
                    if (item.id === action.article.article.id &&
                        item.count < item.max_count) 
                    {
                        new_item = {
                            ...item , 
                            count: (action.article.count) ? action.article.count : (item.count + 1)
                        }
                    } 
                    return new_item
                })
            }

            // Count the number of goods and final amount
            new_state.forEach(item => {
                new_count += item.count;
                new_summ += (item.count * item.price)

            })
            
            return { articles: new_state, summary:new_summ, count: new_count}
        case 'DEL_FROM_CART': 
            new_state = new_state.filter(item => item.id !== action.id_art)

            // Count the number of goods and final amount
            new_state.forEach(item => {
                new_count += item.count;
                new_summ += (item.count * item.price)

            })
            return { articles: new_state, summary:new_summ, count: new_count}
        default :
            return state;
    }
} 

export default addToCartReducer;