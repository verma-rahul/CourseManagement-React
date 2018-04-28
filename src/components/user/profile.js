import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import {
    Button, Checkbox, Form, Menu, Segment, Input, Advertisement, Dropdown, Image,
    Container, Header, Embed, Grid, Message, Table, Icon, Modal, Accordion
} from 'semantic-ui-react'

import {userUpdate} from "../../actions/userAction"
import { connect } from 'react-redux';
class Profile extends Component {
constructor(props){
  super(props)
  this.state={...props.user}
}
  submit(){
    const {username,password,firstName,lastName} = this.state;
    console.log(username,password,firstName,lastName)
    if(!this.checkProperties({username,password,firstName,lastName},4)){
        alert("Enter All 4 Fields")
    }else{
      this.props.userUpdate(this.state.id,this.state)
    }
  }

checkProperties(obj,len) {
  console.log(obj)
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
   console.log(this.state)
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
      <Button color='green' fluid onClick={this.submit.bind(this)}>Update</Button>
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

export default connect(mapStateToProps, {userUpdate})(Profile);
