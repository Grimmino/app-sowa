//scss
import './scss/style.scss';
//js
require('./js/app');
require('./js/sidebar');
//jsx
import React from 'react';
import ReactDOM from 'react-dom';
//components
import ProfileMini from './components/ProfileMini';
import CreateList from './components/Desk';

ReactDOM.render(<ProfileMini />, document.getElementById('profilemini'));
ReactDOM.render(<CreateList />, document.getElementById('createlist'));