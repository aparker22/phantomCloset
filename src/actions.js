const UPDATE_JWT = "UPDATE_JWT";
export let updateJWT = (token) => ({type: UPDATE_JWT, payload: token});
let updateJWTAction = (state, action) => {
    return ({...state, jwt: action.payload});
}
updateJWT.toString = () => UPDATE_JWT;

const UPDATE_SET_LIST = "UPDATE_SET_LIST";
export let updateSetList = (listFromServer) => ({type: UPDATE_SET_LIST, payload: listFromServer});
let updateSetListAction = (state, action) => {
    return ({...state, setList: action.payload});
}
updateSetList.toString = () => UPDATE_SET_LIST;

let reducers = {
    [updateJWT]: updateJWTAction,
    [updateSetList]: updateSetListAction,
}

export default reducers;