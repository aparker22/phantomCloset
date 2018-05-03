const UPDATE_SEARCH = 'UPDATE_SEARCH'
export let updateSearch = (payload) => ({ type: UPDATE_SEARCH, payload });
let updateSearchAction = (state, action) =>
    ({...state, searchInput: action.payload});
updateSearchAction.toString = () => UPDATE_SEARCH;

const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS'
export let updateSearchResults = (payload) => ({ type: UPDATE_SEARCH_RESULTS, payload });
let updateSearchResultsAction = (state, action) =>
    ({...state, searchAutocomplete: action.payload});
updateSearchResultsAction.toString = () => UPDATE_SEARCH_RESULTS;

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

const ADD_TO_QUEUE = 'ADD_TO_QUEUE'
export let addToQueue = (payload) => ({ type: ADD_TO_QUEUE, payload });
let addToQueueAction = (state, action) => {
    let newQueue = state.cart.concat([action.payload]);
    ({...state, cardQueue: newQueue});
}
addToQueueAction.toString = () => ADD_TO_QUEUE;

let reducers = {
    [updateJWT]: updateJWTAction,
    [updateSetList]: updateSetListAction,
    [updateSearchAction]: updateSearchAction,
    [updateSearchResultsAction]: updateSearchResultsAction,
    [addToQueueAction]: addToQueueAction
}

export default reducers;