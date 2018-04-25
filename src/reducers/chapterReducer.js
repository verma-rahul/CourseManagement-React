import TYPES from "../constants/actionTypes"
import STATES from "../constants/storeStates"

export const ChapterReducer = (state = STATES.INIT_CHAPTER_STATE, action) =>{
switch(action.type) {

 case TYPES.CHAPTERS_LOAD_START :
 return {...state, loading: true,failed: false,chaptersList: [],selected:{},
        active:null}
 break;

 case TYPES.CHAPTERS_LOAD_SUCCESS :
 return {...state, chaptersList: action.payload,loading: false,failed:false,
          selected:{},active:null}
 break;

 case TYPES.CHAPTERS_LOAD_FAILED :
 return {...state, failed: true,loading: false,chaptersList: [],selected:{},
          active:null}
 break;

 case TYPES.CHAPTER_MAKE_ACTIVE :
 return {...state,active:action.payload}
 break;

 case TYPES.CHAPTER_SELECTED:
 return {...state,selected:action.payload}
 break;

 default :
 return state
 }
}
