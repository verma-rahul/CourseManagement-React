import axios from 'axios';
import API from "../constants/apis"
class CourseAsyncApis {

  static getCourseDetail(courseId){
    console.log(API.COURSE_DETAIL(courseId))
    return axios.get(API.COURSE_DETAIL(courseId))
    // .then(function (response) {
    //   console.log(response.data);
    //   return response.data
    // })
    // .catch(function (error) {
    //   console.log(error);
    //   return error
    // });
  }

}


export default CourseAsyncApis;
