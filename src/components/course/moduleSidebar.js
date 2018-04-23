import React,{Component } from 'react';
import {Icon, Dropdown, Menu , Sidebar,
  Segment, Button, Header,Input,Grid,Responsive,Label } from 'semantic-ui-react'

import styles from './moduleSidebar.css';
import { connect } from 'react-redux';
import {loadModules} from "../../actions/moduleAction";

class ModuleSidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {menuVisible: false,
                  activeItem: 'Assignments',
                  activePage:'course'
                };
  this.handleItemClick.bind(this)
  }
  componentWillMount(){
    this.props.loadModules()
  }

 handleItemClick = (e, {index}) =>{
   if (e.target.nodeName=="A")
   console.log("event is view and index is ",index)
   else{
     console.log("event is delete and index ",index)
   }
 }
 handaddClick(id){
    console.log("item ",id)
 }
 handdisplyClick(id){
    console.log("disp ",id)
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
   console.log(this.props)
   const activeItem = this.state.activeItem
   const activePage = this.state.activePage
   const modulesMenuItems= this.props.modulesList.map((module) =>
   (<Menu.Item name={module.name} index={module.id}
    key={module.id}
    onClick={(e) => ((e.target.nodeName=="A")?this.handdisplyClick(module.id):null)}>
      {module.name}
    <Icon name='pencil' color="yellow" inverted circular link
      onClick={() => this.handaddClick(module.id)} size="small"/>
    <Icon name='close' color="red" inverted circular link
            onClick={() => this.handaddClick(module.id)} size="small"/>

 </Menu.Item>));


   return (
     <div className="full-height">
     <Sidebar.Pushable as={Segment} attached="bottom" >
          <Sidebar as={Menu} animation='push' vertical
            visible={this.props.showSidebar} inverted color="blue"
            activeIndex={this.props.active}>
            {modulesMenuItems}
                 <Menu.Item>
                   <Input fluid size="mini" placeholder='Add Module..' >
                       <input />
                         <Icon name='checkmark' color="teal" inverted circular link onClick={this.handaddClick}/>
                      <Icon name='add' color="green" inverted circular link onClick={this.handaddClick}/>
                  </Input>

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
    loading: state.module.loading,
    active: state.module.active,
    modulesList: state.module.modulesList,
    showSidebar: state.app.showSidebar,
    failed:state.module.failed
});

export default connect(mapStateToProps, {loadModules})(ModuleSidebar);

// <Menu.Item disabled>
//         Link
//     </Menu.Item>
// icon={<Icon name='checkmark' color="blue" inverted circular link onClick={this.handaddClick}/>}
// <Menu.Item header>Sections</Menu.Item>
// <Menu.Item name='Assignments' active={activeItem === 'Assignments'} onClick={this.handleItemClick} />
// <Menu.Item name='Exams' active={activeItem === 'Exams'} onClick={this.handleItemClick} />
// <Menu.Item>
// <Icon name='close' color="red" inverted circular link onClick={this.handaddClick}/>
// <Icon name='pencil' color="yellow" inverted circular link onClick={this.handaddClick}/>
   // <Icon name='pencil' color="yellow" inverted circular link onClick={this.handaddClick} size="mini"/>
  //  <Button circular icon='close' onClick={this.handaddClick}
  //    color="red"  floated='right' compact size="mini">
  // </Button>
