import {BrowserRouter as Router} from 'react-router-dom';
import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Login from  "./components/user/login" ;
import Register from "./components/user/register";
import Profile from "./components/user/profile";
import CourseDetails from "./components/course/courseDetails"
import CourseList from "./components/course/courseList"
import Navbar from "./components/common/navbar"
import WelcomePage from "./components/common/welcomePage"
import NotFound from "./components/common/notFound"
import { Segment,Grid,GridRow,GridColumn,Header, Container } from 'semantic-ui-react'
import {toggleSidebar, switchTab} from "./actions/commonAction";



class AppRouter extends Component {


    render() {
      return (
  <Router>
    <div>
  <Navbar/>

            <Switch>
                  <Route exact path="/" component={WelcomePage}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/register" component={Register}/>
                  <Route path="/profile" component={Profile}/>
                  <Route path="/CourseDetails" component={CourseDetails}/>
                  <Route path="/CourseList" component={CourseList}/>
                  <Route component={NotFound}/>
            </Switch>
</div>
  </Router>

      );
    }
}


export default AppRouter;
