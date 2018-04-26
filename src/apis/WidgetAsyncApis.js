import axios from 'axios';
import API from "../constants/apis"

class WidgetAsyncApis {

  static getWidgetsByChapterId(chapterId){
    console.log(API.WIDGET_BY_CHAPTER_ID(chapterId))
    return axios.get(API.WIDGET_BY_CHAPTER_ID(chapterId))
  }
  static updateWidget(widgetId,newWidget){
    console.log(API.WIDGET_BY_WIDGET_ID(widgetId))
    return axios.put(API.WIDGET_BY_WIDGET_ID(widgetId),newWidget)
  }

  static addWidget(chapterId,widget){
    console.log(API.WIDGET_BY_CHAPTER_ID(chapterId))
    return axios.post(API.WIDGET_BY_CHAPTER_ID(chapterId),widget)
  }

  static deleteWidget(widgetId){
    console.log(API.WIDGET_BY_WIDGET_ID(widgetId))
    return axios.delete(API.WIDGET_BY_WIDGET_ID(widgetId))
  }

}

export default WidgetAsyncApis;
