import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import CategoryScreen from './CategoryScreen';
import ItemScreen from './ItemScreen';
import Header from './Header';
import Footer from './Footer';

let Router = () => 
  <div className="container">
    <HashRouter>
        <div className="container">
            <Header />
            <Route path="/" exact component={HomeScreen} />
            <Route path = "/profile" component={ProfileScreen} />
            <Route path = "/category" component={CategoryScreen} />
            <Route path = "/item" component={ItemScreen} />
            <Footer />
        </div>
    </HashRouter>
  </div>

export default Router;