import React, {PropTypes} from 'react'


class SearchResultBox extends React.Component {
	constructor(props) {
        super(props);
    }

    render () {
    	return (
    		<div>{this.props.content}</div>
    	)
    }
}

SearchResultBox.propTypes = {
	content : PropTypes.string
}

export default SearchResultBox