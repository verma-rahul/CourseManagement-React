import TYPES from "../constants/actionTypes"
import ChapterAsyncApis from "../apis/chapterAsyncApis"
import WidgetAsyncApis from "../apis/WidgetAsyncApis"
import {
widgetsLoadStarted,
widgetsLoadFailure,
widgetsLoadSuccess,
makeActiveChapter} from "./moduleAction"

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

export const updateWidget = (widgetId,newWidget) => ((dispatch, getState) =>
{
      console.log("in updateWidget, STARTED",widgetId,newWidget)
      // dispatch(chaptersLoadStarted());
      // ChapterAsyncApis.updateChapter(chapterId,newChapter)
      // .then(response => {
      //   console.log("FETCH updateChapter", response.data)
      //    dispatch(makeActiveModule(getState().module.active))
      // })
      // .catch(err => {
      //   console.log("in updateChapter, FAILED",err)
      //   dispatch(chaptersLoadFailure())  })
})


export const addWidget= (widget) => ((dispatch, getState) =>
{
  console.log("in addWidget, STARTED",widget)
  // dispatch(chaptersLoadStarted());
  // ChapterAsyncApis.addChapter(getState().module.active,chapter)
  // .then(response => {
  //   console.log("FETCH addChapter", response.data)
  //    dispatch(makeActiveModule(getState().module.active))
  // })
  // .catch(err => {
  //   console.log("in addChapter, FAILED",err)
  //     dispatch(chaptersLoadFailure()) })
})


export const deleteWidget= (widgetId) => ((dispatch, getState) =>
{
      console.log("in deleteChapter STARTED",widgetId)
      // dispatch(chaptersLoadStarted());
      // ChapterAsyncApis.deleteChapter(chapterId)
      // .then(response => {
      //   console.log("FETCHED del", response)
      //    dispatch(makeActiveModule(getState().module.active))
      // })
      // .catch(err => {
      //   console.log("in del, FAILED",err)
      //   dispatch(chaptersLoadFailure()) })
})
