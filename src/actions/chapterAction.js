
import TYPES from "../constants/actionTypes"
import ChapterAsyncApis from "../apis/chapterAsyncApis"
import WidgetAsyncApis from "../apis/WidgetAsyncApis"
import {
chaptersLoadStarted,
chaptersLoadFailure,
chaptersLoadSuccess,
makeActiveModule} from "./moduleAction"
const makeActiveChapterStarted=  (chapterId) =>({
  type:TYPES.CHAPTER_MAKE_ACTIVE,
  payload:chapterId
})
const widgetsLoadSuccess = (data) =>  ({
  type: TYPES.WIDGETS_LOAD_SUCCESS,
  payload:data
})
const widgetsLoadFailure = () => ({
  type: TYPES.WIDGETS_LOAD_FAILED,
})
const widgetsLoadStarted = () => ({
  type: TYPES.WIDGETS_LOAD_START,
})
export const makeActiveChapter = (chapterId) => ((dispatch, getState) =>
{
      console.log("in makeActiveChapterStarted, STARTED",)
      dispatch(makeActiveChapterStarted(chapterId));
      dispatch(widgetsLoadStarted());
      WidgetAsyncApis.getWidgetsByChapterId(chapterId).then(response => {
          console.log("in makeActiveChapter FETCHED")
          console.log(response.data)
          dispatch(widgetsLoadSuccess(response.data));
      })
      .catch(err => {
        console.log("in makeActiveChapter, FAILED")
        dispatch(widgetsLoadFailure())  })
})


// chaptersLoadStarted,
// chaptersLoadFailure,
// chaptersLoadSuccess,
// makeActiveModule
export const updateChapter = (chapterId,newChapter) => ((dispatch, getState) =>
{
      console.log("in updateChapter, STARTED",chapterId,newChapter)
      dispatch(chaptersLoadStarted());
      ChapterAsyncApis.updateChapter(chapterId,newChapter)
      .then(response => {
        console.log("FETCH updateChapter", response.data)
         dispatch(makeActiveModule(getState().module.active))
      })
      .catch(err => {
        console.log("in updateChapter, FAILED",err)
        dispatch(chaptersLoadFailure())  })
})


export const addChapter= (chapter) => ((dispatch, getState) =>
{
  console.log("in addChapter, STARTED",chapter)
  dispatch(chaptersLoadStarted());
  ChapterAsyncApis.addChapter(getState().module.active,chapter)
  .then(response => {
    console.log("FETCH addChapter", response.data)
     dispatch(makeActiveModule(getState().module.active))
  })
  .catch(err => {
    console.log("in addChapter, FAILED",err)
      dispatch(chaptersLoadFailure()) })
})

export const selectChapter= (chapter)  =>
{
    console.log(chapter)
      return ({
        type: TYPES.CHAPTER_SELECTED,
        payload:chapter
      })
}

export const deleteChapter= (chapterId) => ((dispatch, getState) =>
{
      console.log("in deleteChapter STARTED",chapterId)
      dispatch(chaptersLoadStarted());
      ChapterAsyncApis.deleteChapter(chapterId)
      .then(response => {
        console.log("FETCHED del", response)
         dispatch(makeActiveModule(getState().module.active))
      })
      .catch(err => {
        console.log("in del, FAILED",err)
        dispatch(chaptersLoadFailure()) })
})
