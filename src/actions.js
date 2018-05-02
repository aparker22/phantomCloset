const UPDATE_JWT = "UPDATE_JWT";
export let updateJWT = (token) => ({type: UPDATE_JWT, payload: token});
let updateJWTAction = (state, action) => {
    return ({...state, jwt: action.payload});
}
updateJWT.toString = () => UPDATE_JWT;



let reducers = {
    [updateJWT]: updateJWTAction,
}

export default reducers;