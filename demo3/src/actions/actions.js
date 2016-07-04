import fetch from 'isomorphic-fetch'
// var request = require('request');

export const ASYNC_UPDATE_CONTENT =  "ASYNC_UPDATE_CONTENT"
export const SYNC_UPDATE_CONTENT = "SYNC_UPDATE_CONTENT"


export function syncUpdateContent (content) {
	console.log("content = " + content);
	return {
		type : SYNC_UPDATE_CONTENT,
		content : content
	}
}

export function asyncUpdateContent () {
	return dispatch => {
        return fetch(`http://127.0.0.1:1024/data.txt`, {
            method: 'GET'
        })
        .then(response => response.text())
        .then(text => {
            console.log(text)
            dispatch({
                type : ASYNC_UPDATE_CONTENT,
		        content : text
            })
        }).catch(e => console.log("Oops, error", e))
    }
}