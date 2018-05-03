import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {loginWithUserData} from './helperFunctions/login';
import {updateJWT} from './actions';

let mapStateToProps = (state) => {
    return {jwt: state.jwt}
};  

let mapDispatchToProps = (dispatch, props) => {
  return {dispatch: dispatch, history: props.history}
};

let submitUserLoginInformation = (event, dispatch, history) => {
    event.preventDefault();
    let username = event.target.username.value;
    let password = event.target.password.value;
    event.target.reset();
    let JSONLoginInfo = { password, username }
    loginWithUserData(JSON.stringify(JSONLoginInfo))
    .then(res => dispatch(updateJWT(res)))
    .then(history.push(`/`))
};

let LoginScreenDumb = ({ dispatch, jwt, history }) =>
    <div className="login-page">
            <form className="login-form" onSubmit={(event) => {
        submitUserLoginInformation(event, dispatch, history);
    }}>
            <input type="text" name="username" placeholder="username"/>
            <input type="password" name="password" placeholder="password"/>
            <button type="submit">login</button>
            <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
            </form>
    </div>


let LoginScreen = connect(mapStateToProps, mapDispatchToProps)(LoginScreenDumb)
export default LoginScreen;
