import 'babel-polyfill'
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'

import { createStore, compose } from 'redux'
import { Provider, connect } from 'react-redux'


import App from './src/components/App'
import DevTools from './src/components/DevTools'

import rootReducer from './src/reducers/index'

const enhancer = compose(
	DevTools.instrument()
);




let store = createStore(rootReducer, enhancer)
 

//  export default connect(mapStateToProps, {
//   loadRepo,
//   loadStargazers
// })(RepoPage)

// ReactDOM.render(
// 	<Provider store={store}>
// 	<div>
// 		<App />
// 		<DevTools />
// 	</div>
// 	</Provider>,
//     document.getElementById('root')
// );



ReactDOM.render(
	<Provider store={store}>
	<div>
	<App />
	<DevTools />
	</div>
	</Provider>,
    document.getElementById('root')
);