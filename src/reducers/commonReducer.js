import TYPES from "../constants/actionTypes"
import STATES from "../constants/storeStates"

export default function appStateReducer(state = STATES.INIT_APP_STATE, action){
switch(action.type) {
 case TYPES.TOGGLE_SIDEBAR :
 return {...state, showSidebar: !state.showSidebar}
 break;
 default :
 return state
 }
}
