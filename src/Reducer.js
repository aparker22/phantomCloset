import sets from './json/sets.json';
import reducers from './actions';

const initialState = {setList: sets, cardList: [], userObject: {}, isUserLoggedIn: true};  

let fallbackReducer = state => state; 

let reducer = (state = initialState, action) => {
    let babyReducer = reducers[action.type];
    babyReducer = babyReducer || fallbackReducer;
    let newState = babyReducer(state, action);
    return newState;
}

export default reducer;