//scss
import './sass/style.sass';
//jsx
import React from 'react';
import ReactDOM from 'react-dom';
//components
//import ProfileMini from './components/ProfileMini';
import CreateList from './components/Desk';
//js
require('./js/header'); //js для header
require('./js/app');
require('./js/sidebar');
require('./js/sw-main-js');
require('./js/slider');


//ReactDOM.render(<ProfileMini />, document.getElementById('profilemini'));
ReactDOM.render(<CreateList />, document.getElementById('myboards'));