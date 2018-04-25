import TYPES from "../constants/actionTypes"
import STATES from "../constants/storeStates"

export const WidgetReducer = (state = STATES.INIT_WIDGET_PAGE_STATE, action) =>{
switch(action.type) {

 case TYPES.WIDGETS_LOAD_START :
 return {...state, loading: true,failed: false,widgetsList: [],selected:{}}
 break;

 case TYPES.WIDGETS_LOAD_SUCCESS :
 return {...state, widgetsList: action.payload,loading: false,failed:false,selected:{}}
 break;

 case TYPES.WIDGETS_LOAD_FAILED :
 return {...state, failed: true,loading: false,widgetsList: [],selected:{}}
 break;

 case TYPES.WIDGET_SELECTED:
 return {...state,selected:action.payload}
 break;

 default :
 return state
 }
}
