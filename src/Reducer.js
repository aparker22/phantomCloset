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

let fallbackReducer = state => state; 

let reducer = (state = initialState, action) => {
    let babyReducer = reducers[action.type];
    babyReducer = babyReducer || fallbackReducer;
    let newState = babyReducer(state, action);
    return newState;
}

export default reducer;
