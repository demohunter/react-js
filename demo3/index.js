import 'babel-polyfill'
import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider, connect } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
const loggerMiddleware = createLogger() //在console中显示日志


import App from './src/components/App'
import DevTools from './src/components/DevTools'

import rootReducer from './src/reducers/index'

const enhancer = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware),
	DevTools.instrument()
);


let store = createStore(rootReducer, {}, enhancer)
 

ReactDOM.render(
	<Provider store={store}>
	<div>
	<App />
    <DevTools />
	</div>
	</Provider>,
    document.getElementById('root')
);
