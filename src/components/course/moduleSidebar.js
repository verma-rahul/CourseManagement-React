import React,{Component } from 'react';
import {Icon, Dropdown, Menu , Sidebar,
  Segment, Button, Header,Input,Grid,Responsive,Label,Tab,Loader, Dimmer } from 'semantic-ui-react'

import styles from './moduleSidebar.css';
import { connect } from 'react-redux';
import {loadModules,makeActiveModule} from "../../actions/moduleAction";

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
   (<Menu.Item name={module.name} active={this.props.active == module.id}
    key={module.id}
    onClick={(e) => ((e.target.nodeName=="A")?this.props.makeActiveModule(module.id):null)}>
      {module.name}
    <Icon name='pencil' color="yellow" inverted circular link
      onClick={() => this.handaddClick(module.id)} size="small"/>
    <Icon name='close' color="red" inverted circular link
            onClick={() => this.handaddClick(module.id)} size="small"/>

 </Menu.Item>));

 const inputField=
 <Menu.Item>
 <Input fluid size="mini" placeholder='Add Module..' >
   <Icon name='checkmark' color="teal" inverted circular link onClick={this.handaddClick}/>
       <input />
    <Icon name='add' color="green" inverted circular link onClick={this.handaddClick}/>
  </Input>
</Menu.Item>
const lodingMenuItem= <Menu.Item >
                      <Loader active inline='centered' />
                      </Menu.Item>

const failedMenuItem=<Menu.Item  name="failed" >
                      <Icon color="red" size="big" name='warning' />
                        Failed Loding
                      </Menu.Item>
   return (
     <div className="full-height-width">
     <Sidebar.Pushable as={Segment} attached="bottom" >
          <Sidebar as={Menu} animation='push' vertical
            visible={this.props.showSidebar} inverted color="blue">
            { !this.props.loading && !this.props.failed && modulesMenuItems  }

            { this.props.loading && lodingMenuItem }
            { this.props.failed && failedMenuItem}
            {inputField}
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
          {this.props.children}
        </Segment>
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

export default connect(mapStateToProps, {loadModules,makeActiveModule})(ModuleSidebar);
