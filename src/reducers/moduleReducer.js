import TYPES from "../constants/actionTypes"
import STATES from "../constants/storeStates"

export const moduleReducer = (state = STATES.INIT_MODULE_STATE, action) =>{
switch(action.type) {
 case TYPES.MODULES_LOAD_START :
 return {...state, loading: true}
 break;
 case TYPES.MODULES_LOAD_SUCCESS :
 return {...state, modulesList: action.payload}
 break;
 case TYPES.MODULES_LOAD_FAILED :
 return {...state, failed: true}
 break;
 default :
 return state
 }
}
