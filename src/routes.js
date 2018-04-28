import {Router} from 'react-router-dom';
import React, { Component } from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Login from  "./components/user/login" ;
import Register from "./components/user/register";
import Profile from "./components/user/profile";
import CourseDetails from "./components/course/courseDetails"
import CourseList from "./components/course/courseList"
import Navbar from "./components/common/navbar"
import WelcomePage from "./components/common/welcomePage"
import NotFound from "./components/common/notFound"
import { Segment,Grid,GridRow,GridColumn,Header, Container } from 'semantic-ui-react'
import {} from "./actions/commonAction";
import { connect } from 'react-redux';
import {HISTORY} from "./constants/common"

class AppRouter extends Component {


checkLoggedIn(){
  return !(Object.keys(this.props.user).length === 0)
}
    render() {
      return (
  <Router history={HISTORY}>
        <div>
          <Navbar/>
            <Switch >
                  <Route exact path="/" component={WelcomePage} />
                  <Route path="/login"
                    render={
                      () => (!this.checkLoggedIn() ? (<Login/>):
                                                   (<NotFound/>))}/>
                  <Route path="/register"
                    render={
                    () => (!this.checkLoggedIn() ? (<Register/>):
                                                 (<NotFound/>))}/>
                  <Route path="/profile"
                    render={
                    () => (this.checkLoggedIn() ? (<Profile/>):
                                                 (<NotFound/>))}/>
                  <Route path="/CourseDetails" render={
                    () => (this.checkLoggedIn() ? (<CourseDetails/>):
                                                 (<NotFound/>))}/>
                  <Route path="/CourseList" render={
                    () => (this.checkLoggedIn() ? (<CourseList/>):
                                                 (<NotFound/>))}/>
                  <Route component={NotFound}/>
            </Switch>
</div>
  </Router>

      );
    }
}

const mapStateToProps = (state) => ({
    user:state.app.user
});

export default connect(mapStateToProps, {})(AppRouter);
