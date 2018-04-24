import React,{Component } from 'react';
import {Icon, Dropdown, Menu , Sidebar,
  Segment, Button, Header,Input,Grid,Responsive,Label,Tab,Loader, Dimmer } from 'semantic-ui-react'

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
  const selectedModuleName=( Object.keys(this.props.selected).length === 0)?
                                    "":this.props.selected.name
   console.log(selectedModuleName)

   console.log(!(Object.keys(this.props.selected).length === 0))
   const modulesMenuItems= this.props.modulesList.map((module) =>
   (<Menu.Item name={module.name} active={this.props.active == module.id}
    key={module.id}
    onClick={(e) => ((e.target.nodeName=="A")?this.props.makeActiveModule(module.id):null)}>
      {module.name}
    <Icon name='pencil' color="yellow" inverted circular link
        size="small"
        onClick={() =>
          this.props.selectModule(module)}/>
    <Icon name='close' color="red" inverted circular link
          size="small"
          onClick={() =>
            this.props.deleteModule(module)}/>

 </Menu.Item>));

 var inputMenuItem= <Menu.Item>
 <Input fluid size="mini" placeholder='Add Module..'>

       <input
         ref={input => this.newModuleInput=input}
         key={selectedModuleName||1}
         defaultValue={selectedModuleName}/>
       { !(Object.keys(this.props.selected).length === 0)
          && <Icon name='checkmark' color="teal"
          inverted circular link
          onClick={() =>
            this.props.updateModule(this.props.selected,this.newModuleInput.value)}/>}
        { Object.keys(this.props.selected).length === 0
          && <Icon name='add' color="green"
          inverted circular link
          onClick={() => this.props.addModule(this.newModuleInput.value)} />}
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
    showSidebar: state.app.showSidebar,
    failed:state.module.failed,
    selected:state.module.selected
});

export default connect(mapStateToProps,
  {loadModules,makeActiveModule,updateModule,addModule,
  selectModule,deleteModule})(ModuleSidebar);


// this.props.selected.length===0?
