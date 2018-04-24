import TYPES from "../constants/actionTypes"
import STATES from "../constants/storeStates"

export const moduleReducer = (state = STATES.INIT_MODULE_STATE, action) =>{
switch(action.type) {
 case TYPES.MODULES_LOAD_START :
 return {...state, loading: true,failed: false,modulesList: [],selected:{}}
 break;
 case TYPES.MODULES_LOAD_SUCCESS :
 return {...state, modulesList: action.payload,loading: false,selected:{}}
 break;
 case TYPES.MODULES_LOAD_FAILED :
 return {...state, failed: true,loading: false,modulesList: [],selected:{}}
 break;

 case TYPES.MODULE_MAKE_ACTIVE :
 return {...state,active:action.payload}
 break;

 case TYPES.MODULE_SELECTED:
 return {...state,selected:action.payload}
 break;

 default :
 return state
 }
}
