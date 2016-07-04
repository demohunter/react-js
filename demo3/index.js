import 'babel-polyfill'
import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider, connect } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
const loggerMiddleware = createLogger()


import App from './src/components/App'
import DevTools from './src/components/DevTools'

import rootReducer from './src/reducers/index'

const enhancer = compose(
	DevTools.instrument()
);




let store = createStore(rootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
)
 

ReactDOM.render(
	<Provider store={store}>
	<div>
	<App />

	</div>
	</Provider>,
    document.getElementById('root')
);
