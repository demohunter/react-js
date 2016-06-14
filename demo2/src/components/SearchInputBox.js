import React, {PropTypes} from 'react'

class SearchInputBox extends React.Component {
	constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
    	var content = this.refs.input.value;
    	this.props.sendKeyword(content);
    }

    render() {
    	const {sendKeyword} = this.props
    	console.log(sendKeyword)
    	return (
    		<div>
    			<input type="text" ref="input" />
    			<input type="button" value="search" onClick={this.handleClick} />
    		</div>
    	)
    }
}


SearchInputBox.propTypes = {
	sendKeyword : PropTypes.func
}


export default SearchInputBox