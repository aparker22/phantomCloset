import React from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.png'
import LinkToSet from './LinkToSet';
import sets from './json/sets.json';

let setList = sets;

let Header = () => 
    <div className="header">
        <ul className="headerList">
            <li><Link to='/'><img src={logo} className="headerLogo" alt="logo"/></Link></li>
        </ul>
        <ul className="headerList">{
            setList.map(set => <LinkToSet set={set} key={set.id}/>)
        }</ul>
        <ul className="headerList">
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
    </div>

export default Header;