import React, {PropTypes} from 'react';
import { Router, Route, Link } from 'react-router'

class MyFirstReactCompnent extends React.Component {
    constructor(props) {
        console.log("init");
        super(props);

        this.state = {
            title: 'hello'
        };

    }

    render() {

        const {title, myEvent} = this.props;
        console.log(this.props.children);
        // console.log(myEvent);
        return (
            <div>
                <h1>{title}</h1>

                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>

                {this.props.children}
            </div>
        )
    }

    // getDefaultProps() {
    //     console.log("getDefaultProps");
    // }

    // getInitialState() {
    //     console.log("getinitialState");
    // }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true;
    }
}

MyFirstReactCompnent.propTypes = {
    title : PropTypes.string.isRequired,
    myEvent: PropTypes.func
}

export default MyFirstReactCompnent;