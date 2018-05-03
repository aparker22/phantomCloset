import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {createNewUserInDatabase} from './helperFunctions/login';
import './stylesheets/login.css';  

let mapStateToProps = (state) => {
    return {jwt: state.jwt}
};  

let mapDispatchToProps = (dispatch, props) => {
  return {dispatch: dispatch, history: props.history}
};

let registerNewUser = (event, dispatch, history) => {
    event.preventDefault();
    let username = event.target.username.value;
    let password = event.target.password.value;
    event.target.reset();
    let JSONLoginInfo = { username, password }
    createNewUserInDatabase(JSON.stringify(JSONLoginInfo))
    .then(history.push(`/login`))
};

let RegisterScreenDumb = ({ dispatch, jwt, history }) =>
    <div className="login-page">
        <form className="login-form" onSubmit={(event) => {
        registerNewUser(event, dispatch, history);
    }}>
        <input type="text" name="username" placeholder="Choose a Username"/>
        <input type="password" name="password" placeholder="Choose a Password"/>
        <button type="submit">Create</button>
        <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
        </form>
    </div>


let RegisterScreen = connect(mapStateToProps, mapDispatchToProps)(RegisterScreenDumb)

export default RegisterScreen;
