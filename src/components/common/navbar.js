import React,{Component } from 'react';
import {Icon, Dropdown, Menu , Sidebar,
  Segment, Button, Header,Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {} from "../../actions/commonAction";
class Navbar extends Component {

 render() {
   return (
       <Menu inverted fixed="top" fluid size="mini">
          <Menu.Item as={Link} to='/' name='home' >
          Course Manager
          </Menu.Item>
          <Menu.Menu position='right'>
       {  !this.props.user && <Menu.Item name='login' as={Link}
       to='/login' />}
       {  this.props.user && <Menu.Item name='profile'as={Link}
       to='/profile' />}
       {  !this.props.user && <Menu.Item name='register' as={Link}
       to='/register'/>}
       {  this.props.user && <Menu.Item name='CourseDetails' as={Link}
        to='/CourseDetails'/>}
       {  this.props.user && <Menu.Item name='CourseList' as={Link}
       to='/CourseList'/>}
          </Menu.Menu>
        </Menu>
   )
}
}


const mapStateToProps = (state) => ({
    user:state.app.user,
    activePage:state.app.activePage
});

export default connect(mapStateToProps, {})(Navbar);


// active={activePage === 'CourseList'}
//   onClick={this.handlePageClick}
