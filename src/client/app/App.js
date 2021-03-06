import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fethDataAsync, setFilter, setDataFiltred, addToCart, delFromCart } from './redux/actions'

import Header from './components/Header'
import Lside from './components/Lside'
import Articles from './components/Articles'
import Cart from './components/Cart'

import { unique, randomizeFloat } from './utils'

const App = () => {

  // React state
  const [exchange, setExchange] = useState(
      { 
        cost: randomizeFloat(20, 80),
        rise: false
      }
    );
  const [cartVisible, setCartVisible] = useState(false);
  
  // Redux state
  const cart = useSelector(state => state.cart)
  const dataJSON = useSelector(state => state.data)
  const dataFiltred = useSelector(state => state.dataFiltred)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const groups = unique(dataJSON.map(item => item.group))
  const groupsFiltred = unique(dataFiltred.map(item => item.group))

  useEffect(() => {

    // Reading data.json for the first time
    dispatch(fethDataAsync([]))

    // Reading data.json every 15 seconds
    // and dollar exchange rate change 
    setInterval(() => {

      dispatch(fethDataAsync())  
      console.log("Rereading file after 15 seconds...");

      const new_exchange = randomizeFloat(20, 80)
      setExchange(prevState => ({
        cost: new_exchange,
        rise: ((new_exchange > prevState.cost) ? true : false)
      }))

    }, 15000);
    
  }, [])

  const handleFilterCategory = (event) => {

    const { value, checked } = event.target
    let new_filter = filter

    if (checked && value === 'all') {
      new_filter = []
      dispatch(setFilter(new_filter))
    } else if (!checked && value !== 'all') {
      new_filter = new_filter.filter(item => item !== value)
      dispatch(setFilter(new_filter))
    } else if (checked && value !== 'all'){
      new_filter.push(value)
      dispatch(setFilter(new_filter))
    }
    dispatch(setDataFiltred(new_filter, dataJSON))
  }


  const handleAddToCart = (article, max_count, count) => {
    console.log('article', article)
    dispatch(addToCart({
      article,
      max_count,
      count
    }))
  }

  const handleDelFromCart = (id_art) => {
    dispatch(delFromCart(id_art))
  }


  delFromCart

  return (
    <>
    <Header 
      setCartVisible={setCartVisible}
      cartVisible={cartVisible}
      cart={cart}
    />
    <main className="main-container">
        <Lside 
          groups={groups}
          handleFilterCategory={handleFilterCategory}
          exchange={exchange}
        />
        <Articles 
          items={dataFiltred} 
          groups={groupsFiltred}
          exchange={exchange}
          handleAddToCart={handleAddToCart}
        />
    </main>
    <Cart 
      cartVisible={cartVisible}
      cart={cart}
      exchange={exchange}
      handleAddToCart={handleAddToCart}
      handleDelFromCart={handleDelFromCart}
    />
    </>
  );
}

export default App
