import React, { Component } from 'react';
import axios from "axios";
import {
  Button, Checkbox, Form, Menu, Segment, Input, Advertisement, Dropdown, Image,
  Container, Header, Embed, Grid, Message, Table, Icon, Modal, Accordion,
Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import COURSEIMAGE from "../../assests/images/DETAILS.PNG"
import { connect } from 'react-redux';
import {loadCourseList,updateCourse,addCourse,
deleteCourse,makeActiveCourse} from "../../actions/courseAction";

class CourseList extends Component {
  constructor(props){
    super(props)
    this.state = {name:"",selected:false,newName:""}
    this.selectForUpdate.bind(this)
    this.resetState.bind(this)
  }
  componentWillMount(){
    this.props.loadCourseList()

  }
componentWillReceiveProps(props){
  if (this.props.resetLocalState)
  this.resetState()
}
selectForUpdate(courseName){
  this.setState({name:courseName,selected:true})
}
cancelUpdate(){
  this.setState({name:"",selected:false})
}
submit(event,name,id){

  if(!this.checkProperties({name},1)){
      alert("Enter a value for name ")
  }else{
    if (event=="ADD")
    this.props.addCourse({name})
    else {
        this.props.updateCourse(id,{name})
    }
  }
}
checkProperties(obj,len) {
  if (Object.keys(obj).length <len)
    return false
    for (var key in obj) {
        if (obj[key] == null || obj[key] == "")
            return false;
    }
    return true;
}
handleInputChange(e,prop) {
    let change = {}
    change[prop.name] =prop.value
    this.setState(change)
  }

  resetState(){
    this.setState({name:"",selected:false,newName:""})
  }
  render() {

  const courseCardList = this.props.courseList.map( (course) =>
  (<Card key={course.id} link onClick={(e) => (((e.target.nodeName=="DIV")||
    (e.target.nodeName=="IMG"))?this.props.makeActiveCourse(course.id):null)}>
          <Image src={COURSEIMAGE} />
    <Card.Content>
        {!this.state.selected &&  <Card.Header>{course.name}</Card.Header>}
        {this.state.selected  &&
           <Input fluid placeholder="Enter Course Name..."
             name="name"
             onChange={this.handleInputChange.bind(this)}
             value={this.state.name}>
                    <input />
                    <Icon name='checkmark' color="teal"
                      inverted circular link
                      onClick={()=>this.submit("UPDATE",this.state.name,course.id)}/>
                    <Icon name='close' color="grey"
                        inverted circular link
                        onClick={this.cancelUpdate.bind(this)}/>
                  </Input> }
    </Card.Content>
    {!this.state.selected &&
      <Card.Content extra>
   <Button.Group fluid>
  <Button color='yellow' icon='pencil'
     onClick={()=>this.selectForUpdate(course.name)}/>
   <Button color='red' icon='close' onClick={()=>this.props.deleteCourse(course.id)}/>
  </Button.Group>
</Card.Content> }
 </Card>))
const newCourseCard=(<Card fluid color='blue'>
         <Card.Content>
        <Input fluid
               placeholder="Enter Course Name..."
                 name="newName"
                 onChange={this.handleInputChange.bind(this)}
                 value={this.state.newName}>
           <input />
               <Icon name='add' color="green"
                 inverted circular link
                 onClick={()=>this.submit("ADD",this.state.newName,null)}/>
           </Input>
         </Card.Content>

      </Card>)
const  loadingItem= (<Segment basic textAlign="center">
           <Icon loading name='spinner'size='huge' />
        <Header as='h1'>   Loading.. </Header>
        </Segment>)

const  failedItem=   (<Segment  basic textAlign="center">
           <Header as='h1'>
                 Failed
               </Header>
              <Icon.Group size='huge'>
               <Icon loading name='spinner' />
               <Icon color="red"  name='warning'  />
             </Icon.Group>
           </Segment>)
return (
      <Segment padded basic>
        {!this.props.loading
          && !this.props.failed &&
          <Card.Group>
            {newCourseCard}
            {courseCardList}
          </Card.Group>}
      {this.props.loading && loadingItem}
      {this.props.failed && failedItem}
    </ Segment>
 );
  }
}

const mapStateToProps = (state) => ({
    courseList:state.course.courseList,
    loading:state.course.loading,
    failed:state.course.failed,
    resetLocalState:state.course.localStateReset
});

export default connect(mapStateToProps,
  {loadCourseList,updateCourse,addCourse,
  deleteCourse,makeActiveCourse})(CourseList);
