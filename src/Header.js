import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.png'
import LinkToSet from './LinkToSet';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {setList: state.setList}
};

class Header extends Component {
    
    render(){
    let {setList} = this.props;
    return <div className="header">
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
    }
}

let HeaderComponent = connect(mapStateToProps)(Header)

export default HeaderComponent;