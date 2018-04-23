import {appStateReducer} from "../reducers/commonReducer"
import {combineReducers} from "redux";
import {chapterReducer} from "../reducers/chapterReducer"
import {moduleReducer} from "../reducers/moduleReducer"
export const rootReducer = combineReducers({
    app:appStateReducer,
    chapter:chapterReducer,
    module:moduleReducer
});
