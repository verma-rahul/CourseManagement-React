const COURSE_DETAIL= (courseId) => `/api/course/${courseId}/coursePage`
const MODULES_BY_COURSE_ID =(courseId) => `/api/module/?course_id=${courseId}`
export default {COURSE_DETAIL,MODULES_BY_COURSE_ID};
