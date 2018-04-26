import TYPES from "../constants/actionTypes"
import ChapterAsyncApis from "../apis/chapterAsyncApis"
import WidgetAsyncApis from "../apis/WidgetAsyncApis"
import {
widgetsLoadStarted,
widgetsLoadFailure,
widgetsLoadSuccess,
makeActiveChapter} from "./chapterAction"

export const openForm =() => ({
  type:TYPES.OPEN_WIDGET_FORM
})

export const closeForm =() => ({
  type:TYPES.CLOSE_WIDGET_FORM
})

export const selectWidget = (widget)  =>
{
    console.log(widget)
      return ({
        type: TYPES.WIDGET_SELECTED,
        payload:widget
      })
}
export const addWidget= (widget) => ((dispatch, getState) =>
{
  console.log("in addWidget, STARTED",widget)
  dispatch(widgetsLoadStarted());
  WidgetAsyncApis.addWidget(getState().chapter.active,widget)
  .then(response => {
    console.log("FETCH addWidget", response.data)
     dispatch(makeActiveChapter(getState().chapter.active))
  })
  .catch(err => {
    console.log("in addChapter, FAILED",err)
      dispatch(widgetsLoadFailure()) })
})

export const updateWidget = (widgetId,newWidget) => ((dispatch, getState) =>
{

      console.log("in updateWidget STARTED",widgetId)
      dispatch(widgetsLoadStarted());
      WidgetAsyncApis.updateWidget(widgetId,newWidget)
      .then(response => {
        console.log("FETCH updateWidget", response.data)
         dispatch(makeActiveChapter(getState().chapter.active))
      })
      .catch(err => {
        console.log("in updateWidget, FAILED",err)
          dispatch(widgetsLoadFailure()) })
})




export const deleteWidget= (widgetId) => ((dispatch, getState) =>
{
      console.log("in deleteChapter STARTED",widgetId)
      dispatch(widgetsLoadStarted());
      WidgetAsyncApis.deleteWidget(widgetId)
      .then(response => {
        console.log("FETCH deleteChapter", response.data)
         dispatch(makeActiveChapter(getState().chapter.active))
      })
      .catch(err => {
        console.log("in deleteChapter, FAILED",err)
          dispatch(widgetsLoadFailure()) })
})
