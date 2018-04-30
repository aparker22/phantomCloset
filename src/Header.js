import React from 'react';
import {Link} from 'react-router-dom';

let Header = () => 
    <div className="header">
        <Link to='/'>Home</Link>
        <Link to='/category/'>Category</Link>
        <Link to='/item'>Individual Item</Link>
        <Link to='/profile'>Profile</Link>
    </div>


export default Header;