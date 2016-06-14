import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import SearchInputBox from './SearchInputBox'
import SearchResultBox from './SearchResultBox'
import {updateContent} from '../actions/update'
import { bindActionCreators } from  'redux'


class App extends React.Component {
	constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.state = {
        // 	content : props.content
        // }
    }

    handleSubmit(content) {
    	// this.setState({content:content})
    	console.log(this.props.dispatch);
    	
    	// this.props.dispatch(updateContent(content))
    	this.props.updateContent(content)
    	
    }

    render() {
    	//console.log(this.props.dispatch)

    	return (
    		<div>
    			<SearchInputBox sendKeyword={this.handleSubmit} />
    			<SearchResultBox content={this.props.content} ref="result" />
    		</div>
    	)
    }

}

App.propTypes = {
	content : PropTypes.string
}

App.defaultProps = {
	content : "welcome"
}


const mapDispatchToProps = (dispatch) =>
bindActionCreators({
      updateContent
}, dispatch)



export default connect(
	state => ({content:state.content}),
	mapDispatchToProps
)(App)