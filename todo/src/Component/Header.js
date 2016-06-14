import React, {PropTypes} from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'hello'
        };
    }

    render() {
        return (
            <h1>{this.props.title}</h1>
        )
    }
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}

export default Header;