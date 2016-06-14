import {UPDATE_CONTENT} from '../actions/update'



export default function update(state = {content:''}, action) {
	console.log("UPDATE_CONTENT = " + UPDATE_CONTENT);
	console.log("action = " + action.content);
	console.log("action = " + action.type);
	switch(action.type) {
		case UPDATE_CONTENT:
			return Object.assign({}, state, {
        		content: action.content
      		})
		default:
			return state
	}
}