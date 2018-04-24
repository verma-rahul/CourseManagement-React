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
 widgets:[]
}
const INIT_APP_STATE = {
 showSidebar:true,
 activePage:"home",
 user:true,
 courseDetail:[],
 courseloading:false,
 courseloadingFailed:false
}

export default {INIT_CHAPTER_STATE ,INIT_MODULE_STATE,INIT_WIDGET_PAGE_STATE,INIT_APP_STATE};
