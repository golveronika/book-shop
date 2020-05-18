import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import allReducers from './app/redux/reducers'
import App from './app/App'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  allReducers,
  composeEnhancer(applyMiddleware(thunk)),
)

const Root = () => (
<Provider store={store}>
  <App />
</Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))