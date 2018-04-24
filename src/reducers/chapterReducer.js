import TYPES from "../constants/actionTypes"
import STATES from "../constants/storeStates"

export const chapterReducer = (state = STATES.INIT_CHAPTER_STATE, action) =>{
switch(action.type) {
 case TYPES.SWITCH_CHAPTER :
 return {...state, active: action.payload}
 break;
 case TYPES.CHAPTERS_LOAD_START :
 return {...state, loading: true,failed: false,modulesList: []}
 break;
 case TYPES.CHAPTERS_LOAD_SUCCESS :
 return {...state, chaptersList: action.payload,loading: false}
 break;
 case TYPES.CHAPTERS_LOAD_FAILED :
 return {...state, failed: true,loading: false,modulesList: []}
 break;
 default :
 return state
 }
}
