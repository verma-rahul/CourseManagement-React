import React,{Component } from 'react';
import {Icon, Dropdown, Menu , Sidebar,
  Segment, Button, Header,Input,Grid,Responsive } from 'semantic-ui-react'

import styles from './moduleSidebar.css';
import { connect } from 'react-redux';
import {toggleSidebar} from "../../actions/commonAction";
class ModuleSidebar extends Component {

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
 handaddClick(){
    console.log("item ")
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
     <div className="full-height">
     <Sidebar.Pushable as={Segment} attached="bottom" >
          <Sidebar as={Menu} animation='push' vertical visible={this.props.showSidebar} inverted color="blue">
            <Menu.Item header>Sections</Menu.Item>
            <Menu.Item name='Assignments' active={activeItem === 'Assignments'} onClick={this.handleItemClick} />
            <Menu.Item name='Exams' active={activeItem === 'Exams'} onClick={this.handleItemClick} />
            <Menu.Item>
                   <Input fluid size="mini"
                      icon={<Icon name='add' color="green" inverted circular link onClick={this.handaddClick}/>}
                      placeholder='Add Module..' />
              </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher children={this.props.children}>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
     </div>

   )
}
}

const mapStateToProps = (state) => ({
    chapter: state.chapter,
    showSidebar: state.app.showSidebar
});

export default connect(mapStateToProps, {toggleSidebar})(ModuleSidebar);
//
// modulesLoading
// activeModule
// buttons
// modules
// //
// <Menu.Item disabled>
//         Link
//     </Menu.Item>
