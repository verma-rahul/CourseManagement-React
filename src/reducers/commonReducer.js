import TYPES from "../constants/actionTypes"
import STATES from "../constants/storeStates"

export const AppStateReducer = (state = STATES.INIT_APP_STATE, action) =>{
switch(action.type) {
  case TYPES.USER_LOAD_START :
  return {...state, loading: true,failed: false,user:{}}
  break;

  case TYPES.USER_LOAD_SUCCESS :
  return {...state, user: action.payload,loading: false,failed:false}
  break;

  case TYPES.USER_LOAD_FAILED :
  return {...state, failed: true,loading: false,user:{}}
  break;

  case TYPES.USER_LOGOUT :
  return {...state, failed: false,loading: false,user:{}}
  break;

  default :
  return state
}
}
