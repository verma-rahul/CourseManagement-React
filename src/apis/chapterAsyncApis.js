import axios from 'axios';
import API from "../constants/apis"

class ChapterAsyncApis {

  static getChaptersByModuleId(moduleId){
    console.log(API.CHAPTERS_BY_MODULE_ID(moduleId))
    return axios.get(API.CHAPTERS_BY_MODULE_ID(moduleId))
  }

}


export default ChapterAsyncApis;
