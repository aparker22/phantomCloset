const UPDATE_USER_OBJECT = "UPDATE_USER_OBJECT";
export let updateUserObject = (token) => ({type: UPDATE_USER_OBJECT, payload: token});
let updateUserObjectAction = (state, action) => {
    return ({...state, userObject: action.payload});
  }
updateUserObject.toString = () => UPDATE_USER_OBJECT;

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

const UPDATE_SET_LIST = "UPDATE_SET_LIST";
export let updateSetList = (listFromServer) => ({type: UPDATE_SET_LIST, payload: listFromServer});
let updateSetListAction = (state, action) => {
    return ({...state, setList: action.payload});
}
updateSetList.toString = () => UPDATE_SET_LIST;

const UPDATE_CARD_LIST = "UPDATE_CARD_LIST";
export let updateCardList = (listFromServer) => ({type: UPDATE_CARD_LIST, payload: listFromServer});
let updateCardListAction = (state, action) => {
    return ({...state, cardList: action.payload});
}
updateCardList.toString = () => UPDATE_CARD_LIST;

let reducers = {
    [updateUserObject]: updateUserObjectAction,
    [updateSetList]: updateSetListAction,
    [updateCardList]: updateCardListAction,
    [updateSearchAction]: updateSearchAction,
    [updateSearchResultsAction]: updateSearchResultsAction
}

export default reducers;