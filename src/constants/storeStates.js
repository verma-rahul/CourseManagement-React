import {HISTORY} from "./common"
const INIT_CHAPTER_STATE = {
 loading:false,
 active:null,
 chaptersList:[],
 failed:false,
 selected:{}
}
const INIT_MODULE_STATE = {
 loading:false,
 active:null,
 modulesList:[],
 failed:false,
 selected:{}
}
const INIT_WIDGET_PAGE_STATE = {
  loading:false,
  widgetsList:[],
  failed:false,
  selected:{},
  showForm:false
}

const INIT_APP_STATE = {
 user:{},
 loading:false,
 failed:false,
 activePage:HISTORY.location.pathname.replace('/','')
}

const INIT_COURSE_STATE = {
  active:null,
  loading:false,
  courseList:[],
  Failed:false,
  showSidebar:true,
  localStateReset:false
}

export default {INIT_CHAPTER_STATE ,INIT_MODULE_STATE,INIT_WIDGET_PAGE_STATE,
                INIT_APP_STATE,INIT_COURSE_STATE};
