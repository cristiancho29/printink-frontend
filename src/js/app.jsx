
//import 'antd/dist/antd.css';
import Style from '../css/style.scss';
import Main from '../js/Components/Main.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

 
 
ReactDOM.render(<MuiThemeProvider><Main /></MuiThemeProvider>, document.getElementById('app'));