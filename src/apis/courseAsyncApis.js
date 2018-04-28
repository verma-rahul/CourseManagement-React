import axios from 'axios';
import API from "../constants/apis"
class CourseAsyncApis {

  static getCourseListByUserId(userId){
    console.log(API.COURSE_BY_USER_ID(userId))
    return axios.get(API.COURSE_BY_USER_ID(userId))
  }

}

export default CourseAsyncApis;
