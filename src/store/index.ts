import {combineReducers, createStore, applyMiddleware} from "redux";
import hiddenReducer from './overlay/reducers'
import thunk from "redux-thunk";


const rootReducer = combineReducers({
hidden: hiddenReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

