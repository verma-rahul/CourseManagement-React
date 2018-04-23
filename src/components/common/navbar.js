import React,{Component } from 'react';
import {Icon, Dropdown, Menu , Sidebar,
  Segment, Button, Header,Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {menuVisible: false,
                  activePage:''};
  }

 handlePageClick = (e, { name }) =>
 {
    this.setState({
      activePage: name
  })
}

 render() {
   const activePage = this.state.activePage
   return (
       <Menu inverted fixed="top" fluid size="mini">
          <Menu.Item as={Link} to='/' name='home' active={activePage === 'home'}
            onClick={this.handlePageClick}>
          Course Manager
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='login' active={activePage === 'login'} as={Link} to='/login'
              onClick={this.handlePageClick} />
            <Menu.Item name='profile' active={activePage === 'profile'} as={Link} to='/profile'
              onClick={this.handlePageClick} />
            <Menu.Item name='register' active={activePage === 'register'} as={Link} to='/register'
                onClick={this.handlePageClick} />
              <Menu.Item name='CourseDetails' active={activePage === 'CourseDetails'} as={Link} to='/CourseDetails'
              onClick={this.handlePageClick} />
              <Menu.Item name='CourseList' active={activePage === 'CourseList'} as={Link} to='/CourseList'
              onClick={this.handlePageClick} />
          </Menu.Menu>
        </Menu>
   )
}
}


export default Navbar
