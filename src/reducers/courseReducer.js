import TYPES from "../constants/actionTypes"
import STATES from "../constants/storeStates"

export const CourseReducer = (state = STATES.INIT_COURSE_STATE, action) =>{
switch(action.type) {
 case TYPES.TOGGLE_SIDEBAR :
 return {...state, showSidebar: !state.showSidebar}
 break;
 case TYPES.COURSE_LOAD_START :
 return {...state, loading: true,courseList:[]}
 break;
 case TYPES.COURSE_LOAD_SUCCESS :
 return {...state, courseList: action.payload,loading:false,failed:false}
 break;
 case TYPES.COURSE_LOAD_FAILED :
 return {...state, failed: true,courseList:[]}
 break;
 default :
 return state
 }
}
