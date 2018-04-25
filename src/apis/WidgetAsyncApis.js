import axios from 'axios';
import API from "../constants/apis"

class WidgetAsyncApis {

  static getWidgetsByChapterId(chapterId){
    console.log(API.WIDGET_BY_CHAPTER_ID(chapterId))
    return axios.get(API.WIDGET_BY_CHAPTER_ID(chapterId))
  }

}

export default WidgetAsyncApis;
