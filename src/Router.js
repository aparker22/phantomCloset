import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SetScreen from './SetScreen';
import CardScreen from './CardScreen';
import Header from './Header';
import Footer from './Footer';

let Router = () => 
  <div className="container">
    <HashRouter>
        <div className="container">
            <Header />
            <Route path="/" exact component={HomeScreen} />
            <Route path = "/profile" component={ProfileScreen} />
            <Route path = "/set" component={SetScreen} />
            <Route path = "/card" component={CardScreen} />
            <Footer />
        </div>
    </HashRouter>
  </div>

export default Router;