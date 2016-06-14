import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import MyList from './MyList';
import TabsExampleControlled from './TabsExampleControlled';
import Header from './Header';


const style = {
    marginLeft: 20
};

const Main = () => (

    <div>
        <AppBar title="hello" />
        <Header title="我那个去" />
        <Avatar />
        <br />
        <FlatButton label="button" />
        <Paper zDepth={2}>
            <TextField hintText="First name" style={style}  underlineShow={false} />
            <Divider />
            <TextField hintText="Middle name" style={style}  underlineShow={false} />
            <Divider />
            <TextField hintText="Last name" style={style}  underlineShow={false} />
            <Divider />
            <TextField hintText="Email address" style={style}  underlineShow={false} />
            <Divider />
        </Paper>

        <MyList />

        <TabsExampleControlled />
    </div>
);

export default Main;