import TYPES from "../constants/actionTypes"
import ModuleAsyncApis from "../apis/moduleAsyncApis"
import ChapterAsyncApis from "../apis/chapterAsyncApis"

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

const makeActiveModuleStarted=  (moduleId) =>({
  type:TYPES.MODULE_MAKE_ACTIVE,
  payload:moduleId
})

const chaptersLoadSuccess = (data) =>  ({
  type: TYPES.CHAPTERS_LOAD_SUCCESS,
  payload:data
})

const chaptersLoadFailure = () => ({
  type: TYPES.CHAPTERS_LOAD_FAILED,
})

export const makeActiveModule = (moduleId) => ((dispatch, getState) =>
{
      console.log("in makeActiveModule, STARTED",getState())
      dispatch(makeActiveModuleStarted(moduleId));
      ChapterAsyncApis.getChaptersByModuleId(moduleId).then(response => {
          console.log("in makeActiveModule chapters Fectch, FETCHED")
          dispatch(chaptersLoadSuccess(response.data));
      })
      .catch(err => {
        console.log("in loadModules, FAILED")
        dispatch(chaptersLoadFailure())  })

})

export const loadModules = (CourseId=1) => ((dispatch, getState) =>
{
      console.log("in loadModules, STARTED")
      dispatch(modulesLoadStarted());
      ModuleAsyncApis.getModulesByCourseId(CourseId)
      .then(response => {
          console.log("in loadModules, FETCHED")
          dispatch(modulesLoadSuccess(response.data));
      })
      .catch(err => {
        console.log("in loadModules, FAILED")
        dispatch(modulesLoadFailure())  })
})


export const updateModule = (module,newModuleName) => ((dispatch, getState) =>
{
      console.log("in updateModule, STARTED",module,newModuleName)
      // dispatch(modulesLoadStarted());
      // ModuleAsyncApis.getModulesByCourseId(CourseId)
      // .then(response => {
      //     console.log("in loadModules, FETCHED")
      //     dispatch(modulesLoadSuccess(response.data));
      // })
      // .catch(err => {
      //   console.log("in loadModules, FAILED")
      //   dispatch(modulesLoadFailure())  })
})


export const addModule= (moduleName) => ((dispatch, getState) =>
{
      console.log("in addModule, STARTED",moduleName)
      // dispatch(modulesLoadStarted());
      // ModuleAsyncApis.getModulesByCourseId(CourseId)
      // .then(response => {
      //     console.log("in loadModules, FETCHED")
      //     dispatch(modulesLoadSuccess(response.data));
      // })
      // .catch(err => {
      //   console.log("in loadModules, FAILED")
      //   dispatch(modulesLoadFailure())  })
})

export const selectModule= (module)  =>
{

      return ({
        type: TYPES.MODULE_SELECTED,
        payload:module
      })
}

export const deleteModule= (module) => ((dispatch, getState) =>
{
      console.log("in addModule, deleteModule",module)

      // dispatch(modulesLoadStarted());
      // ModuleAsyncApis.getModulesByCourseId(CourseId)
      // .then(response => {
      //     console.log("in loadModules, FETCHED")
      //     dispatch(modulesLoadSuccess(response.data));
      // })
      // .catch(err => {
      //   console.log("in loadModules, FAILED")
      //   dispatch(modulesLoadFailure())  })
})
