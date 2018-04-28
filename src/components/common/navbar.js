import React,{Component } from 'react';
import {Icon, Dropdown, Menu , Sidebar,
  Segment, Button, Header,Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {} from "../../actions/commonAction";
import {logout} from "../../actions/userAction"
class Navbar extends Component {

 render() {
   const userExists=!(Object.keys(this.props.user).length === 0)
   return (
       <Menu inverted fixed="top" fluid size="mini">
          <Menu.Item as={Link} to='/' name='home' >
          Course Manager
          </Menu.Item>
          <Menu.Menu position='right'>
       {  !userExists && <Menu.Item name='login' as={Link}
       to='/login' />}  
       {  userExists && <Menu.Item name='profile'as={Link}
       to='/profile' />}
       {  !userExists && <Menu.Item name='register' as={Link}
       to='/register'/>}
       {  userExists && <Menu.Item name='CourseList' as={Link}
       to='/CourseList'/>}
       {  userExists && <Menu.Item name='CourseDetails' as={Link}
        to='/CourseDetails'/>}
       {  userExists && <Menu.Item name='logout' as={Link} onClick={this.props.logout}
       to='/' />}
          </Menu.Menu>
        </Menu>
   )
}
}


const mapStateToProps = (state) => ({
    user:state.app.user
});

export default connect(mapStateToProps, {logout})(Navbar);


// active={activePage === 'CourseList'}
//   onClick={this.handlePageClick}
