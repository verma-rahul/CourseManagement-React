import TYPES from "../constants/actionTypes"
import STATES from "../constants/storeStates"

export default function chapterReducer(state = STATES.INIT_CHAPTER_STATE, action){
switch(action.type) {
 case TYPES.SWITCH_CHAPTER :
 return {...state, activeChapter: action.payload}
 break;
 default :
 return state
 }
}
