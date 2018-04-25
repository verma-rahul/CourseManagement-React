const COURSE_DETAIL= (courseId) => `/api/course/${courseId}/coursePage`
const MODULE_BY_COURSE_ID =(courseId) => `/api/module/?course_id=${courseId}`
const CHAPTER_BY_MODULE_ID=(moduleId)=> `/api/chapter/?module_id=${moduleId}`
const MODULE_BY_MODULE_ID= (moduleId) => `/api/module/${moduleId}`
const WIDGET_BY_CHAPTER_ID = (chapterId) =>`/api/widget/?chapter_id=${chapterId}`
const CHAPTER_BY_CHAPTER_ID = (chapterId) => `/api/chapter/${chapterId}`

export default {COURSE_DETAIL,MODULE_BY_COURSE_ID,CHAPTER_BY_MODULE_ID,
                MODULE_BY_MODULE_ID,CHAPTER_BY_CHAPTER_ID,
                WIDGET_BY_CHAPTER_ID  };
