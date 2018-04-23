import axios from 'axios';
import API from "../constants/apis"

class ModuleAsyncApis {

  static getModulesByCourseId(courseId){
    console.log(API.MODULES_BY_COURSE_ID(courseId))
    return axios.get(API.MODULES_BY_COURSE_ID(courseId))
  }

}


export default ModuleAsyncApis;
