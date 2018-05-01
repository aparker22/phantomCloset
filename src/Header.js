import React from 'react';
import {Link} from 'react-router-dom';

let Header = () => 
    <div className="header">
        <Link to='/'>Home</Link>
        <Link to='/set'>Sets</Link>
        <Link to='/card'>Individual Cards</Link>
        <Link to='/profile'>Profile</Link>
    </div>

export default Header;