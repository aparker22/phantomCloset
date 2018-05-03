import reducers from './actions';

const initialState = {
    setList: [], 
    cardList: [],
    userObject: {},
    isUserLoggedIn: false,
    searchInput: '',
    searchAutocomplete: [],
    cardQueue: []
}

let checkLocalStorageForUserObject = () => {
    let userObject = localStorage.getItem('userObject');
    if (userObject) {
        return userObject;
    } else {
        return {};
    }
}

let fallbackReducer = state => state; 

let reducer = (state = initialState, action) => {
    let babyReducer = reducers[action.type];
    babyReducer = babyReducer || fallbackReducer;
    let newState = babyReducer(state, action);
    return newState;
}

export default reducer;
