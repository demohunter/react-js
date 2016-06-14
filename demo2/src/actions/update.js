export const UPDATE_CONTENT = 'update_content'

export function updateContent (content) {
	console.log("content = " + content);
	return {
		type : UPDATE_CONTENT,
		content : content
	}
}
