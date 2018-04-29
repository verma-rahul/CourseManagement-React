import React,{Component } from 'react';
import {Icon, Dropdown, Menu , Sidebar,
  Segment, Button, Header,Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {setActivePage} from "../../actions/commonAction";
import {logout} from "../../actions/userAction"

class Navbar extends Component {

 render() {
   const userExists=!(Object.keys(this.props.user).length === 0)
   const activePage=this.props.activePage
   console.log(activePage)
   return (
       <Menu inverted fixed="top" fluid size="mini">
          <Menu.Item as={Link} to='/' name='home'
            active={activePage === ''}
            onClick={()=>this.props.setActivePage("")}
            >
          Course Manager
          </Menu.Item>
          <Menu.Menu position='right'>
       {  !userExists && <Menu.Item name='login' as={Link}
       active={activePage === 'login'}
       onClick={()=>this.props.setActivePage("login")}
       to='/login' />}

       {  userExists && <Menu.Item name='profile'as={Link}
        active={activePage === 'profile'}
        onClick={()=>this.props.setActivePage("profile")}
         to='/profile' />}

       {  !userExists && <Menu.Item name='register' as={Link}
       active={activePage === 'register'}
       onClick={()=>this.props.setActivePage("register")}
       to='/register'/>}

       {  userExists && <Menu.Item name='CourseList' as={Link}
       active={activePage === 'CourseList'}
       onClick={()=>this.props.setActivePage("CourseList")}
       to='/CourseList'/>}

       {  userExists && <Menu.Item name='logout' as={Link}
       onClick={()=> this.props.logout() }
       to='/' />}

          </Menu.Menu>
        </Menu>
   )
}
}


const mapStateToProps = (state) => ({
    user:state.app.user,
    activePage:state.app.activePage
});

export default connect(mapStateToProps, {logout,setActivePage})(Navbar);
