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
   // to be changed later
 showSidebar:true,
 activePage:"",
  // to be changed later
 user:true,
 // to be changed later
 course:{id:1,name:"A"}
}


const INIT_COURSE_STATE = {
  active:null,
  selected:{},
  loading:false,
  courseList:[],
  Failed:false,
  showSidebar:true
}

export default {INIT_CHAPTER_STATE ,INIT_MODULE_STATE,INIT_WIDGET_PAGE_STATE,
                INIT_APP_STATE,INIT_COURSE_STATE};
