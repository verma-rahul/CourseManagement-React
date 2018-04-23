const INIT_CHAPTER_STATE = {
 activeChapter:"",
 chapters:[]
}
const INIT_MODULE_STATE = {
 loading:false,
 active:"",
 modulesList:[],
 failed:false
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
