import axios from axios;


class ModuleAsyncApis {
  static getAllModulesByCourse(courseId){
    return "getAllModulesByCourse "+courseId
  }
  static deleteModulebyId(moduleId){
    return "deleteModulebyId"
  }
  static updateModulebyId(moduleId,module){
    return "updateModulebyId ",moduleId,module
  }
  static addModuletoCourse(courseId,module){
    return "addModuletoUser"+courseId,module
  }
}


export default ModuleAsyncApis;
