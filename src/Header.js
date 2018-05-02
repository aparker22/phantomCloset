import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.png'
import LinkToSet from './secondaryComponents/LinkToSet';
import {connect} from 'react-redux';
import {fetchSetList} from './helperFunctions/headerFetchRequests';
import {updateSetList} from './actions';

let mapStateToProps = (state) => {
    return {setList: state.setList, isUserLoggedIn: state.isUserLoggedIn}
};

let mapDispatchToProps = (dispatch, props) => {
    return {dispatch: dispatch, history: props.history}
  };

class Header extends Component {
    constructor(props) {
		super(props);
		this.state = {active: false};
    }
    
    componentDidMount() {
        fetchSetList()
        .then(res => this.props.dispatch(updateSetList(res)))
    }
    
    render(){
    let {setList, isUserLoggedIn} = this.props;
    let {active} = this.state;

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
                    setList.map(set => <li><LinkToSet set={set} key={set}/></li>)
                }
                <li onClick={toggleActive}>Close</li></ul>)
        }
    };

    let LoginOrProfileOption = () => {
        if (isUserLoggedIn === true ) {
            return <li><Link to='/profile'>Profile</Link></li>  
        } else {
            return <li><Link to='/login'>Login</Link> / <Link to='/register'>Create Account</Link></li>
        }
    }

    return <div className="header">
        <ul className="headerList">
            <li><Link to='/'><img src={logo} className="headerLogo" alt="logo"/></Link></li>
        </ul>
        <div className="setListDropdown" onClick={toggleActive}>{
            <MenuFunction />
        }</div>
            <div className="search">
            <input type="text" className="searchTerm" placeholder="What are you looking for?" />
            <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
            </button>
        </div>
        <ul className="headerList">
            <LoginOrProfileOption />
        </ul>
    </div>
    }
}

let HeaderComponent = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderComponent;