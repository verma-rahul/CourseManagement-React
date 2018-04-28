import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {  Button, Checkbox, Form, Menu, Segment, Input, Advertisement, Dropdown, Image,
    Container, Header, Embed, Grid, Message, Table, Icon, Modal, Accordion,Radio,
    Ref
} from 'semantic-ui-react'
import {userRegister} from "../../actions/userAction"
import { connect } from 'react-redux';

class Register extends Component {
  constructor(props){
    super(props)
    this.state = {username:"",password:"",type:"",firstName:"",lastName:""}
  }
  submit(){
    console.log(this.state)
    if(!this.checkProperties(this.state,5)){
        alert("Enter All 5 Fields")
    }else{
      this.props.userRegister(this.state)
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
        return (
          <Grid padded  >
           <Grid.Row centered>
              <Segment padded='very' raised >
          <Form size='large'>
            <Form.Group widths='equal'>
        <Form.Input label='First Name' placeholder='First Name' type='text'
           name="firstName" onChange={this.handleInputChange.bind(this)}
           value={this.state.firstName}/>
        <Form.Input  label='Last Name' placeholder='Last Name' type='text'
          name="lastName" onChange={this.handleInputChange.bind(this)}
          value={this.state.lastName}/>
         </Form.Group>
           <Form.Group widths='equal'>
      <Form.Input  label='Username' placeholder='Username' type='text'
        name="username" onChange={this.handleInputChange.bind(this)}
        value={this.state.username}/>
      <Form.Input  label='Password' type='password' placeholder='password'
        name="password" onChange={this.handleInputChange.bind(this)}
        value={this.state.password}/>
      </Form.Group>
      <Form.Group  widths='equal'>
          <Form.Radio name="type"
            label='Student' value='STUDENT'
            checked={this.state.type === "STUDENT"}
            onChange={this.handleInputChange.bind(this)}  />

          <Form.Radio
            name="type"
            label='Faculty'
            value='FACULTY'
             checked={this.state.type === "FACULTY"}
              onChange={this.handleInputChange.bind(this)} />
 </Form.Group>
      <Button color='blue' fluid onClick={this.submit.bind(this)} >Register</Button>
    </Form>
  </Segment>
  </Grid.Row>
</Grid>

        )
    }
}

const mapStateToProps = (state) => ({
    user:state.app.user
});

export default connect(mapStateToProps, {userRegister})(Register);
