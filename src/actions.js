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

let reducers = {
    [updateJWT]: updateJWTAction,
    [updateSearchAction]: updateSearchAction,
    [updateSearchResultsAction]: updateSearchResultsAction
}

export default reducers;