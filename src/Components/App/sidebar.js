import React,{Component } from 'react';
import './sidebar.css';
import {Icon, Dropdown, Menu , Sidebar,
  Segment, Button, Header,Input } from 'semantic-ui-react'

class SideMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {menuVisible: false,
                  activeItem: 'Assignments',
                  activePage:'course'
                };
  }

 handleItemClick = (e, { name }) =>{
   console.log("item ")
   console.log(this.state)
    console.log(name)
   this.setState({
    activeItem: name
   })
 }
 handlePageClick = (e, { name }) =>
 {
   console.log("page")
   console.log(this.state)
   console.log(name)
    this.setState({
      activePage: name
  })
}

 render() {
   const activeItem = this.state.activeItem
   const activePage = this.state.activePage
   return (
     <div>
       <Menu inverted fixed="top" fluid >
          <Menu.Item onClick={() => this.setState({ menuVisible: !this.state.menuVisible })}>
            <Icon  name="sidebar" />Menu
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='course' active={activePage === 'course'} onClick={this.handlePageClick} />
            <Menu.Item name='profile' active={activePage === 'profile'} onClick={this.handlePageClick} />
            <Menu.Item name='logout' active={activePage === 'logout'} onClick={this.handlePageClick} />
          </Menu.Menu>
        </Menu>

     <Sidebar.Pushable as={Segment} attached="bottom">
          <Sidebar as={Menu} animation='push' vertical visible={this.state.menuVisible}>
            <Menu.Item header>Sections</Menu.Item>
            <Menu.Item name='Assignments' active={activeItem === 'Assignments'} onClick={this.handleItemClick} />
            <Menu.Item name='Exams' active={activeItem === 'Exams'} onClick={this.handleItemClick} />
            <Menu.Item>
                       <Input icon='add' placeholder='Enter Section...' />
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment raised padded='very'>
            {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
     </div>
   )
}
}



export default SideMenu
