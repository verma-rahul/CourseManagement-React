import TYPES from "../constants/actionTypes"
import STATES from "../constants/storeStates"

export const AppStateReducer = (state = STATES.INIT_APP_STATE, action) =>{
switch(action.type) {
 case TYPES.TOGGLE_SIDEBAR :
 return {...state, showSidebar: !state.showSidebar}
 break;
 case TYPES.COURSE_LOAD_START :
 return {...state, courseloading: true}
 break;
 case TYPES.COURSE_LOAD_SUCCESS :
 return {...state, courseDetail: action.payload}
 break;
 case TYPES.COURSE_LOAD_FAILED :
 return {...state, courseloadingFailed: true}
 break;
 default :
 return state
 }
}
