import TYPES from "../constants/actionTypes"
import CourseAsyncApis from "../apis/moduleAsyncApis"


const modulesLoadStarted = () => ({
  type: TYPES.MODULES_LOAD_START,
})
const modulesLoadSuccess = (data) =>  ({
  type: TYPES.MODULES_LOAD_SUCCESS,
  payload:data
})

const modulesLoadFailure = () => ({
  type: TYPES.MODULES_LOAD_FAILED,
})

export const loadModules = (CourseId=1) => ((dispatch, getState) =>
{
      console.log("in loadModules, STARTED")
      dispatch(modulesLoadStarted());
      CourseAsyncApis.getModulesByCourseId(CourseId)
      .then(response => {
          console.log("in loadModules, FETCHED")
          dispatch(modulesLoadSuccess(response.data));
      })
      .catch(err => {
        console.log("in loadModules, FAILED")
        dispatch(modulesLoadFailure())  })
})
