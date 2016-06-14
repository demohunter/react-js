import { createStore, combineReducers } from 'redux';
import {SAY, DO} from "./src/reducer";

// var store = createStore(() => {})


// var actionCreator = function() {
//     // ...负责构建一个 action （是的，action creator 这个名字已经很明显了）并返回它
// 	 return {
// 		type: 'AN_ACTION'
//     }
// }

// console.log(store);
// console.log(actionCreator);

// var reducer = function (...args) {
//     console.log('Reducer was called with args', args)
// }

// var store_1 = createStore(reducer)


//var reducer_3 = function (state = {}, action) {
//    console.log('reducer_3 was called with state', state, 'and action', action)
//
//    switch (action.type) {
//        case 'SAY_SOMETHING':
//        	return Object.assign({message: "hello"}, state);
//        default:
//            return state;
//    }
//}
//
//var store_3 = createStore(reducer_3)
//// 输出: reducer_3 was called with state {} and action { type: '@@redux/INIT' }
//
//console.log('store_3 state after initialization:', store_3.getState())

var reducer = combineReducers({
    do: DO,
    say: SAY
});

var store_0 = createStore(reducer);

console.log('store_0 state after initialization:', store_0.getState());


var sayWord = function(word) {
    return {
        type : 'SAY_SOMETHING',
        word: word
    }
}


store_0.subscribe(function() {
    console.log('store_0 has been updated. Latest store state:', store_0.getState());
    // 在这里更新你的视图
});

store_0.dispatch(sayWord("hello"));

console.log('store_0 state after action SAY_SOMETHING:', store_0.getState());
