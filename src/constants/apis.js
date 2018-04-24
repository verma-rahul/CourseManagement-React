const COURSE_DETAIL= (courseId) => `/api/course/${courseId}/coursePage`
const MODULES_BY_COURSE_ID =(courseId) => `/api/module/?course_id=${courseId}`
const CHAPTERS_BY_MODULE_ID=(moduleId)=> `/api/chapter/?module_id=${moduleId}`

export default {COURSE_DETAIL,MODULES_BY_COURSE_ID,CHAPTERS_BY_MODULE_ID};
