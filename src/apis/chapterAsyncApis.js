import axios from 'axios';
import API from "../constants/apis"

class ChapterAsyncApis {

  static getChaptersByModuleId(moduleId){
    console.log(API.CHAPTER_BY_MODULE_ID(moduleId))
    return axios.get(API.CHAPTER_BY_MODULE_ID(moduleId))
  }
  static updateChapter(chapterId,newChapter){
    console.log(API.CHAPTER_BY_CHAPTER_ID(chapterId))
    return axios.put(API.CHAPTER_BY_CHAPTER_ID(chapterId),newChapter)
  }

  static addChapter(moduleId,chapter){
    console.log(API.CHAPTER_BY_MODULE_ID(moduleId))
    return axios.post(API.CHAPTER_BY_MODULE_ID(moduleId),chapter)
  }

  static deleteChapter(chapterId){
    console.log(API.CHAPTER_BY_CHAPTER_ID(chapterId))
    return axios.delete(API.CHAPTER_BY_CHAPTER_ID(chapterId))
  }
}


export default ChapterAsyncApis;
