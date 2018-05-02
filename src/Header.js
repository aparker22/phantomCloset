import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.png'
import LinkToSet from './secondaryComponents/LinkToSet';
import {connect} from 'react-redux';
import SearchBar from './search-bar';

let mapStateToProps = (state) => {
    return {setList: state.setList}
};

class Header extends Component {
    constructor(props) {
		super(props);
		this.state = {active: false};
	}
    
    render(){
    let {setList} = this.props;
    let {active} = this.state;
    console.log(active);

    let toggleActive = (e) => {
        if (active === true) {
            this.setState({active: false});
        } else {
            this.setState({active: true});
        }
    }


    let MenuFunction = () => {
        if (active === false) {
            return <div className="setListStatic">Browse by Set</div>
        } else {
            return(
                <ul className="setListDropdownMenu">{
                    setList.map(set => <li><LinkToSet set={set} key={set.name}/></li>)
                }
                <li onClick={toggleActive}>Close</li></ul>)
        }
    };

    return <div className="header">
        <ul className="headerList">
            <li><Link to='/'><img src={logo} className="headerLogo" alt="logo"/></Link></li>
        </ul>
        <div className="setListDropdown" onClick={toggleActive}>{
            <MenuFunction />
        }</div>
            <SearchBar />
        <ul className="headerList">
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
    </div>
    }
}

let HeaderComponent = connect(mapStateToProps)(Header)

export default HeaderComponent;