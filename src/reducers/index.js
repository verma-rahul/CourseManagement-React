import {AppStateReducer} from "../reducers/commonReducer"
import {combineReducers} from "redux";
import {ChapterReducer} from "../reducers/chapterReducer"
import {ModuleReducer} from "../reducers/moduleReducer"
import {WidgetReducer} from "../reducers/widgetReducer"
import {CourseReducer} from "../reducers/courseReducer"

export const rootReducer = combineReducers({
    app:AppStateReducer,
    chapter:ChapterReducer,
    module:ModuleReducer,
    widget:WidgetReducer,
    course:CourseReducer
});
