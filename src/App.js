import React from 'react';
import './stylesheets/App.css';
import './stylesheets/login.css';  
import store from './Store';
import {Provider} from 'react-redux';
import Router from './Router';

let App = () =>   
    <Provider store={store} className="provider">
        <Router/>
    </Provider>

export default App;