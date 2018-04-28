const COURSE_DETAIL= (courseId) => `/api/course/${courseId}/coursePage`
const MODULE_BY_COURSE_ID =(courseId) => `/api/module/?course_id=${courseId}`
const CHAPTER_BY_MODULE_ID=(moduleId)=> `/api/chapter/?module_id=${moduleId}`
const MODULE_BY_MODULE_ID= (moduleId) => `/api/module/${moduleId}`
const WIDGET_BY_CHAPTER_ID = (chapterId) =>`/api/widget/?chapter_id=${chapterId}`
const CHAPTER_BY_CHAPTER_ID = (chapterId) => `/api/chapter/${chapterId}`
const WIDGET_BY_WIDGET_ID = (widgetId) =>`/api/widget/${widgetId}`
const USER_REGISTER = `/api/user/`
const USER_LOGIN = (username,password) =>`/api/user/?username=${username}&password=${password}`
const USER_BY_USER_ID = (userId) =>`/api/user/${userId}`
export default {COURSE_DETAIL,MODULE_BY_COURSE_ID,CHAPTER_BY_MODULE_ID,
                MODULE_BY_MODULE_ID,CHAPTER_BY_CHAPTER_ID,
                WIDGET_BY_CHAPTER_ID ,WIDGET_BY_WIDGET_ID,
                USER_REGISTER,USER_LOGIN,USER_BY_USER_ID };
