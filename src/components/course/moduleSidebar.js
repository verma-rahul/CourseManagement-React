import React,{Component } from 'react';
import {Icon, Dropdown, Menu , Sidebar,
  Segment, Button, Header,Input,Grid,Label,Tab,Loader } from 'semantic-ui-react'

import styles from './moduleSidebar.css';
import { connect } from 'react-redux';
import {loadModules,makeActiveModule,
  updateModule,addModule,selectModule,
  deleteModule} from "../../actions/moduleAction";

class ModuleSidebar extends Component {
  componentWillMount(){
    this.props.loadModules()
  }
 render() {
   console.log(this.props)
   const addShow= (Object.keys(this.props.selected).length === 0)
   const selectedModuleName=( addShow)?"":this.props.selected.name

   const modulesMenuItems= this.props.modulesList.map((module) =>
   (<Menu.Item name={module.name} active={this.props.active == module.id}
    key={module.id}
    onClick={(e) =>
     ((e.target.nodeName=="A")?this.props.makeActiveModule(module.id):null)}>
      {module.name}
    <Icon name='pencil' color="yellow" inverted circular link
        size="small"
        onClick={() =>
          this.props.selectModule(module)}/>
    <Icon name='close' color="red" inverted circular link
          size="small"
          onClick={() =>
            this.props.deleteModule(module.id)}/>

 </Menu.Item>));

 var inputMenuItem= <Menu.Item>
 <Input fluid size="mini"
        ref="inputModule"
        key={selectedModuleName||"new"}
        defaultValue={selectedModuleName}
        placeholder="Enter Module Name...">
       <input />
       { (!addShow)
          && <Icon name='checkmark' color="teal"
          inverted circular link
          onClick={() =>
            this.props.updateModule(this.props.selected.id,
              {...this.props.selected,name:this.refs.inputModule.inputRef.value})}/>}
        { addShow
          && <Icon name='add' color="green"
          inverted circular link
          onClick={() =>{this.props.addModule({name:this.refs.inputModule.inputRef.value})
                         this.refs.inputModule.inputRef.value=""}}  />}
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
            {inputMenuItem}
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
    showSidebar: state.course.showSidebar,
    failed:state.module.failed,
    selected:state.module.selected
});

export default connect(mapStateToProps,
  {loadModules,makeActiveModule,updateModule,addModule,
  selectModule,deleteModule})(ModuleSidebar);
