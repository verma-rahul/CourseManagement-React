import {appStateReducer} from "../reducers/commonReducer"
import {combineReducers, createStore} from "redux";
import {chapterReducer} from "../reducers/chapterReducer"

export const rootReducer = combineReducers({
    app:appStateReducer,
    chapter:chapterReducer
});
