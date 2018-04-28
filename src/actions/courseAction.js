import TYPES from "../constants/actionTypes"
import CourseAsyncApis from "../apis/courseAsyncApis"

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


//
// export const updateModule = (moduleId,newModule) => ((dispatch, getState) =>
// {
//       console.log("in updateModule, STARTED",moduleId,newModule)
//       dispatch(modulesLoadStarted());
//       ModuleAsyncApis.updateModule(moduleId,newModule)
//       .then(response => {
//         console.log("val updated", response.data)
//          dispatch(loadModules())
//       })
//       .catch(err => {
//         console.log("in updateModules, FAILED",err)
//         dispatch(modulesLoadFailure())  })
// })
//
//
// export const addModule= (module) => ((dispatch, getState) =>
// {
//   console.log("in addModule, STARTED",module)
//   dispatch(modulesLoadStarted());
//   ModuleAsyncApis.addModule(getState().course.active,module)
//   .then(response => {
//     console.log("val added", response.data)
//      dispatch(loadModules())
//   })
//   .catch(err => {
//     console.log("in addModules, FAILED",err)
//     dispatch(modulesLoadFailure())  })
// })
//
// export const deleteModule= (moduleId) => ((dispatch, getState) =>
// {
//       console.log("in addModule, deleteModule",moduleId)
//       dispatch(modulesLoadStarted());
//       ModuleAsyncApis.deleteModule(moduleId)
//       .then(response => {
//         console.log("val del", response)
//          dispatch(loadModules())
//       })
//       .catch(err => {
//         console.log("in del, FAILED",err)
//         dispatch(modulesLoadFailure())  })
// })
