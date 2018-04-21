import TYPES from "../constants/actionTypes"
import STATES from "../constants/storeStates"

export default function appStateReducer(state = STATES.INITSTATE, action){
switch(action.type) {
 case TYPES.TOGGLE_SIDEBAR :
 return {...state, showSidebar: !state.showSidebar}
 break;
 case TYPES.SWITCH_CHAPTER :
 return {...state, chapter: action.payload}
 break;
 default :
 return state
 }
}
