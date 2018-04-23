import axios from 'axios';
import API from "../constants/apis"
class CourseAsyncApis {

  static getCourseDetail(courseId){
    console.log(API.COURSE_DETAIL(courseId))
    return axios.get(API.COURSE_DETAIL(courseId))
  }

}


export default CourseAsyncApis;
