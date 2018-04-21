import {appStateReducer} from "../reducers/commonReducer"
import {combineReducers, createStore} from "redux";
import {chapterReducer} from "../reducers/chapterReducer"

export default const rootReducer = combineReducers({
    appStateReducer,
    chapterReducer
});
