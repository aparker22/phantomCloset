import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginWithUserData} from './helperFunctions/login';
import {updateJWT} from './actions';
import './stylesheets/login.css';



let mapStateToProps = (state) => {
    return {jwt: state.jwt}
};  

let mapDispatchToProps = (dispatch) => {
  return {dispatch: dispatch}
};

class LoginScreenDumb extends Component {

    
    render() {

        let submitUserLoginInformation = (event) => {
            event.preventDefault();
            let username = event.target.username.value;
            let password = event.target.password.value;
            event.target.reset();
            let JSONLoginInfo = {"username":username, "password":password}
            loginWithUserData(JSON.stringify(JSONLoginInfo))
            .then(res => this.props.dispatch(updateJWT(res)))
            .then(this.props.history.push(`/`))
        };

        let toggleForm = (event) => {
        };

        let submitNewUserInformation = (event) => {
            event.preventDefault();
        };

        return <div className="login-page">
            <div className="form" onSubmit={submitNewUserInformation}>
            <form className="register-form">
            <input type="text" name="name" placeholder="name"/>
            <input type="password" name="password" placeholder="password"/>
            <input type="text" name="email" placeholder="email address"/>
            <button type="submit">create</button>
            <p className="message">Already registered? <a onClick={toggleForm}>Sign In</a></p>
            </form>
            <form className="login-form" onSubmit={submitUserLoginInformation}>
            <input type="text" name="username" placeholder="username"/>
            <input type="password" name="password" placeholder="password"/>
            <button type="submit">login</button>
            <p className="message">Not registered? <a onClick={toggleForm}>Create an account</a></p>
            </form>
        </div>
        </div>
    }
}

let LoginScreen = connect(mapStateToProps, mapDispatchToProps)(LoginScreenDumb)
export default LoginScreen;