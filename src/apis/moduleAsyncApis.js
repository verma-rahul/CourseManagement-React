import axios from 'axios';
import API from "../constants/apis"

class ModuleAsyncApis {

  static getModulesByCourseId(courseId){
    console.log(API.MODULE_BY_COURSE_ID(courseId))
    return axios.get(API.MODULE_BY_COURSE_ID(courseId))
  }
static updateModule(moduleId,newModule){
  console.log(API.MODULE_BY_MODULE_ID(moduleId))
  return axios.put(API.MODULE_BY_MODULE_ID(moduleId),newModule)
}

static addModule(courseId,module){
  console.log(API.MODULE_BY_COURSE_ID(courseId))
  return axios.post(API.MODULE_BY_COURSE_ID(courseId),module)
}

static deleteModule(moduleId){
  console.log(API.MODULE_BY_MODULE_ID(moduleId))
  return axios.delete(API.MODULE_BY_MODULE_ID(moduleId))
}
}


export default ModuleAsyncApis;
