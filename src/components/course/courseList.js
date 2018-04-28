import React, { Component } from 'react';
import axios from "axios";
import {
  Button, Checkbox, Form, Menu, Segment, Input, Advertisement, Dropdown, Image,
  Container, Header, Embed, Grid, Message, Table, Icon, Modal, Accordion,
Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import COURSEIMAGE from "../../assests/images/DETAILS.PNG"
import { connect } from 'react-redux';
import {loadCourseList} from "../../actions/courseAction";

class CourseList extends Component {
  constructor(props){
    super(props)
    this.state = {name:"",selected:false}
    this.selectForUpdate.bind(this)
  }
  componentWillMount(){
    this.props.loadCourseList()
  }
handleCardClick(e){
  console.log('CARD')
}
handleButtonClick(e,prop){
  console.log('BUTTON')
}
selectForUpdate(courseName){
  this.setState({name:courseName,selected:true})
}
cancelUpdate(){
  this.setState({name:"",selected:false})
}
submit(){
  const {name} = this.state;
  if(!this.checkProperties({name},1)){
      alert("Enter All 2 Fields")
  }else{
    // this.props.userLogin(this.state.username,this.state.password)
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

  render() {
const COURSELISTLOADED= !(this.props.courseList.length === 0)

  const courseCardList = this.props.courseList.map( (course) =>
  (<Card key={course.id} link onClick={(e) =>
    ((e.target.nodeName=="DIV")?this.handleCardClick():null)}>
          <Image src={COURSEIMAGE} />
    <Card.Content>
        {!this.state.selected &&  <Card.Header>{course.name}</Card.Header>}
        {this.state.selected  &&
           <Input fluid placeholder="Enter new Course ..."
             name="name"
             onChange={this.handleInputChange.bind(this)}
             value={this.state.name}>
                    <input />
                    <Icon name='checkmark' color="teal"
                      inverted circular link />
                    <Icon name='close' color="red"
                        inverted circular link
                        onClick={this.cancelUpdate.bind(this)}/>
                  </Input> }
    </Card.Content>
    {!this.state.selected &&
      <Card.Content extra>
   <Button.Group fluid>
  <Button color='yellow' icon='pencil'
     onClick={()=>this.selectForUpdate(course.name)}/>
   <Button color='red' icon='close' onClick={this.handleButtonClick}/>
  </Button.Group>
</Card.Content> }
 </Card>))
const newCourseCard=(<Card fluid color='blue'>
         <Card.Content>
        <Input fluid
               placeholder="Enter Course ...">
           <input />
               <Icon name='add' color="green"
                 inverted circular link />
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
    failed:state.course.failed
});

export default connect(mapStateToProps,
  {loadCourseList})(CourseList);
