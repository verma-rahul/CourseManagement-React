import axios from 'axios';
import API from "../constants/apis"
class UserAsyncApis {

  static registerUser(user){
    console.log(API.USER_REGISTER)
    return axios.post(API.USER_REGISTER,user)
  }
  static loginUser(username,password){
    console.log(API.USER_LOGIN(username,password))
    return axios.get(API.USER_LOGIN(username,password))
  }

}


export default UserAsyncApis;
