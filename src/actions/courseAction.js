import TYPES from "../constants/actionTypes"
import CourseAsyncApis from "../apis/courseAsyncApis"


const courseLoadStarted = () => ({
  type: TYPES.COURSE_LOAD_START,
})
const courseLoadSuccess = (data) =>  ({
  type: TYPES.COURSE_LOAD_SUCCESS,
  payload:data
})

const courseLoadFailure = () => ({
  type: TYPES.COURSE_LOAD_FAILED,
})

export const loadCourseDetails = (CourseId) => ((dispatch, getState) =>
{
      console.log("in loadCourseDetails, STARTED")
      dispatch(courseLoadStarted());
      CourseAsyncApis.getCourseDetail(getState().course.active)
      .then(data => {
          console.log("in loadCourseDetails, FETCHED")
          dispatch(courseLoadSuccess(data));
      })
      .catch(err => {
        console.log("in loadCourseDetails, FAILED")
        dispatch(courseLoadFailure())  })
})
