import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.png'
import LinkToSet from './secondaryComponents/LinkToSet';
import {connect} from 'react-redux';
import {fetchSetList, fetchCardList} from './helperFunctions/headerFetchRequests';
import {updateSetList, updateCardList, logoutUser} from './actions';
import SearchBar from './search-bar';

let mapStateToProps = (state) => {
    return {setList: state.setList, isUserLoggedIn: state.isUserLoggedIn}
};

let mapDispatchToProps = (dispatch) => {
    return {dispatch: dispatch}
  };

class Header extends Component {
    constructor(props) {
		super(props);
		this.state = {active: false};
    }
    
    componentDidMount() {
        fetchSetList()
        .then(res => this.props.dispatch(updateSetList(res)))
        //fetchCardList()
        //.then(res=>this.props.dispatch(updateCardList(res)))
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
            return  <div><li><Link to='/profile'>Profile</Link></li> 
                <li onClick={() => {
                localStorage.removeItem('userObject');
                this.props.dispatch(logoutUser())}}>Logout</li>
                </div>
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
            <SearchBar />
        <ul className="headerList">
            <LoginOrProfileOption />
        </ul>
    </div>
    }
}

let HeaderComponent = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderComponent;
