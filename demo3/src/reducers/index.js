import {ASYNC_UPDATE_CONTENT, SYNC_UPDATE_CONTENT} from '../actions/actions'

export default function update(state = {content:''}, action) {
	console.log("action = " + action.content);
	console.log("action = " + action.type);
	switch(action.type) {
		case ASYNC_UPDATE_CONTENT:
			return Object.assign({}, state, {
        		content: 'async : ' + action.content
      		})
		case SYNC_UPDATE_CONTENT:
			return Object.assign({}, state, {
        		content: 'sync : ' + action.content
      		})
		default:
			return state
	}
}