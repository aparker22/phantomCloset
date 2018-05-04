import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SetScreen from './SetScreen';
import IndividualSetScreen from './IndividualSetScreen';
import CardScreen from './CardScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HeaderComponent from './Header';
import Footer from './Footer';


let Router = () => 
  <div className="container">
    <HashRouter>
        <div className="container">
            <HeaderComponent />
            <div className="differentScreens">
            <Route path="/" exact component={HomeScreen} />
            <Route path = "/profile" component={ProfileScreen} />
            <Route path = "/set" exact component={SetScreen} />
            <Route path = "/set/:setname" component={IndividualSetScreen} />
            <Route path = "/card/:card" component={CardScreen} />
            <Route path = "/login" component={LoginScreen} />
            <Route path = "/register" component={RegisterScreen} />
            <Route path = "/logout" component={HomeScreen} />
            </div>
            <Footer />
        </div>
    </HashRouter>
  </div>

export default Router;
