import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './src/Component/Main.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppBar from 'material-ui/AppBar';

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Main />
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


