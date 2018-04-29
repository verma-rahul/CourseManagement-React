import axios from 'axios';
import API from "../constants/apis"
class CourseAsyncApis {

  static getCourseListByUserId(userId){
    console.log(API.COURSE_BY_USER_ID(userId))
    return axios.get(API.COURSE_BY_USER_ID(userId))
  }
  static updateCourse(courseId,newCourse){
    console.log(API.COURSE_BY_COURSE_ID(courseId))
    return axios.put(API.COURSE_BY_COURSE_ID(courseId),newCourse)
  }
  static addCourse(userId,course){
    console.log(API.COURSE_BY_USER_ID(userId))
    return axios.post(API.COURSE_BY_USER_ID(userId),course)
  }
  static deleteCourse(courseId){
    console.log(API.COURSE_BY_COURSE_ID(courseId))
    return axios.delete(API.COURSE_BY_COURSE_ID(courseId))
  }
}

export default CourseAsyncApis;
