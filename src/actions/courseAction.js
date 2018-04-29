import TYPES from "../constants/actionTypes"
import CourseAsyncApis from "../apis/courseAsyncApis"
import {HISTORY} from "./../constants/common"
import {setActivePage} from "./commonAction";
const courseListLoadStarted = () => ({
  type: TYPES.COURSE_LIST_LOAD_START,
})
const courseListLoadSuccess = (data) =>  ({
  type: TYPES.COURSE_LIST_LOAD_SUCCESS,
  payload:data
})

const courseListLoadFailure = () => ({
  type: TYPES.COURSE_LIST_LOAD_FAILED,
})

export const makeActiveCourse=  (courseId) => ((dispatch, getState) =>
{
dispatch( { type:TYPES.COURSE_MAKE_ACTIVE,
          payload:courseId})
HISTORY.push('/CourseDetails')
dispatch(setActivePage("CourseDetails"))
})

export const loadCourseList = () => ((dispatch, getState) =>
{
      console.log("in loadCourseList, STARTED")
      dispatch(courseListLoadStarted());
      CourseAsyncApis.getCourseListByUserId(getState().app.user.id)
      .then(response => {
          console.log("in loadCourseList, FETCHED")
          dispatch(courseListLoadSuccess(response.data));
      })
      .catch(err => {
        console.log("in loadCourseList, FAILED")
        dispatch(courseListLoadFailure())  })
})



export const updateCourse = (courseId,newCourse) => ((dispatch, getState) =>
{
      console.log("in updateCourse, STARTED",courseId,newCourse)
          dispatch(courseListLoadStarted());
      CourseAsyncApis.updateCourse(courseId,newCourse)
      .then(response => {
        console.log("updateCourse", response.data)
         dispatch(loadCourseList())
      })
      .catch(err => {
        console.log("in updateCourse, FAILED",err)
        dispatch(courseListLoadFailure())  })
})


export const addCourse= (course) => ((dispatch, getState) =>
{
  console.log("in addCourse, STARTED",course)
    dispatch(courseListLoadStarted());
  CourseAsyncApis.addCourse(getState().app.user.id,course)
  .then(response => {
    console.log("val added", response.data)
     dispatch(loadCourseList())
  })
  .catch(err => {
    console.log("in addModules, FAILED",err)
    dispatch(courseListLoadFailure())  })
})

export const deleteCourse= (courseId) => ((dispatch, getState) =>
{
      console.log("in STARTED, deleteCourse",courseId)
        dispatch(courseListLoadStarted());
      CourseAsyncApis.deleteCourse(courseId)
      .then(response => {
        console.log("deleteCourse,SUCCESS", response)
         dispatch(loadCourseList())
      })
      .catch(err => {
        console.log("deleteCourse, FAILED",err)
        dispatch(courseListLoadFailure())  })
})
