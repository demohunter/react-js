import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import {syncUpdateContent, asyncUpdateContent} from '../actions/actions'
import { bindActionCreators } from  'redux'


class App extends React.Component {
	constructor(props) {
        super(props);
        this.syncClick = this.syncClick.bind(this)
		this.asyncClick = this.asyncClick.bind(this)
        // this.state = {
        // 	content : props.content
        // }
    }

    syncClick() {
    	// this.setState({content:content})
    	console.log(this.props);
    	
    	// this.props.dispatch(updateContent(content))
    	this.props.syncUpdateContent("hello")
    	
    }

	asyncClick() {
    	// this.setState({content:content})
    	console.log(this.props);
    	
    	// this.props.dispatch(updateContent(content))
    	this.props.asyncUpdateContent("hello")
    	
    }

    render() {
    	//console.log(this.props.dispatch)

    	return (
    		<div>
    			<p>{this.props.content}</p>
				<input type="button" value="async" onClick={this.asyncClick} />
				<input type="button" value="sync" onClick={this.syncClick} />
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
      syncUpdateContent,
	  asyncUpdateContent
}, dispatch)



export default connect(
	state => ({content:state.content}),
	mapDispatchToProps
)(App)