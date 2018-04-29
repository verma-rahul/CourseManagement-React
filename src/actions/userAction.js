import TYPES from "../constants/actionTypes"
import UserAsyncApis from "../apis/userAsyncApis"
import {HISTORY} from "./../constants/common"
import {setActivePage} from "./commonAction";

const userLoadStarted = () => ({
  type: TYPES.USER_LOAD_START,
})
const userLoadSuccess = (data) =>  ({
  type: TYPES.USER_LOAD_SUCCESS,
  payload:data
})

const userLoadFailure = () => ({
  type: TYPES.USER_LOAD_FAILED,
})

export const userRegister = (user) => ((dispatch, getState) =>
{
      console.log("in userRegister, STARTED",user)
      dispatch(userLoadStarted());
      UserAsyncApis.registerUser(user).then(response => {
          console.log("in userRegister, FETCHED")
          dispatch(userLoadSuccess(response.data));
          alert("Register Successul")
          HISTORY.push("/profile")
          dispatch(setActivePage("profile"))
      })
      .catch(err => {
        console.log("in userRegister, FAILED")
        dispatch(userLoadFailure())  })

})
export const userUpdate = (userId,newUser) => ((dispatch, getState) =>
{
      console.log("in userUpdate, STARTED",userId,newUser)
      UserAsyncApis.updateUser(userId,newUser)
      .then(response => {
        console.log("userLoadSuccess", response.data)
         dispatch(userLoadSuccess(response.data))
           alert("Update Successul")
      })
      .catch(err => {
        console.log("in updateModules, FAILED",err)
        dispatch(userLoadFailure())  })
})
export const userLogin = (username,password) => ((dispatch, getState) =>
{
      console.log("in userLogin, STARTED")

      UserAsyncApis.loginUser(username,password)
      .then(response => {
          console.log("in userLogin, FETCHED")
          alert("Login Successul")
          HISTORY.push('/courseList')
          dispatch(userLoadSuccess(response.data[0]));
          dispatch(setActivePage("CourseList"))
      })
      .catch(err => {
        console.log("in userLogin, FAILED")
          dispatch(userLoadFailure())  })
})
export const logout = () => ((dispatch, getState) => {
    dispatch({  type: TYPES.USER_LOGOUT})
    dispatch(setActivePage(""))
})
