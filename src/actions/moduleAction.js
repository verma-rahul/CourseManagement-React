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

export const chaptersLoadSuccess = (data) =>  ({
  type: TYPES.CHAPTERS_LOAD_SUCCESS,
  payload:data
})

export const chaptersLoadFailure = () => ({
  type: TYPES.CHAPTERS_LOAD_FAILED,
})
export const chaptersLoadStarted = () => ({
  type: TYPES.CHAPTERS_LOAD_START,
})

export const makeActiveModule = (moduleId) => ((dispatch, getState) =>
{
      console.log("in makeActiveModule, STARTED",getState())
      dispatch(makeActiveModuleStarted(moduleId));
      dispatch(chaptersLoadStarted());
      ChapterAsyncApis.getChaptersByModuleId(moduleId).then(response => {
          console.log("in makeActiveModule chapters Fectch, FETCHED")
          dispatch(chaptersLoadSuccess(response.data));
      })
      .catch(err => {
        console.log("in loadModules, FAILED")
        dispatch(chaptersLoadFailure())  })

})

export const loadModules = (CourseId) => ((dispatch, getState) =>
{
      console.log("in loadModules, STARTED")
      dispatch(modulesLoadStarted());
      ModuleAsyncApis.getModulesByCourseId(getState().course.active)
      .then(response => {
          console.log("in loadModules, FETCHED")
          dispatch(modulesLoadSuccess(response.data));
      })
      .catch(err => {
        console.log("in loadModules, FAILED")
        dispatch(modulesLoadFailure())  })
})


export const updateModule = (moduleId,newModule) => ((dispatch, getState) =>
{
      console.log("in updateModule, STARTED",moduleId,newModule)
      dispatch(modulesLoadStarted());
      ModuleAsyncApis.updateModule(moduleId,newModule)
      .then(response => {
        console.log("val updated", response.data)
         dispatch(loadModules())
      })
      .catch(err => {
        console.log("in updateModules, FAILED",err)
        dispatch(modulesLoadFailure())  })
})


export const addModule= (module) => ((dispatch, getState) =>
{
  console.log("in addModule, STARTED",module)
  dispatch(modulesLoadStarted());
  ModuleAsyncApis.addModule(getState().course.active,module)
  .then(response => {
    console.log("val added", response.data)
     dispatch(loadModules())
  })
  .catch(err => {
    console.log("in addModules, FAILED",err)
    dispatch(modulesLoadFailure())  })
})

export const selectModule= (module)  =>
{

      return ({
        type: TYPES.MODULE_SELECTED,
        payload:module
      })
}

export const deleteModule= (moduleId) => ((dispatch, getState) =>
{
      console.log("in addModule, deleteModule",moduleId)
      dispatch(modulesLoadStarted());
      ModuleAsyncApis.deleteModule(moduleId)
      .then(response => {
        console.log("val del", response)
         dispatch(loadModules())
      })
      .catch(err => {
        console.log("in del, FAILED",err)
        dispatch(modulesLoadFailure())  })
})
