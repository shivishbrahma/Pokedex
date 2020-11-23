import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './scss/app.scss';

window.$ = window.jquery = require('jquery');
require('popper.js');
require('bootstrap');
require('@fortawesome/fontawesome-free/js/all');

ReactDOM.render(<App />, document.getElementById('root'));
