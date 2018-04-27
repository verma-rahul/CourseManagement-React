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
  state = {}
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
handleChange = (e, x) =>

{
    console.log(e.target.name)
  console.log(e,x)
  this.setState({type: x.value })

}
handleInputChange(e,prop) {
    // console.log(prop)
    let change = {}
    change[prop.name] =prop.value
    this.setState(change)
  }
 render() {
      console.log("renderin again")
      console.log(this.state)
        return (
          <Grid padded  >
           <Grid.Row centered>
              <Segment padded='very' raised >
          <Form size='large'>
            <Form.Group widths='equal'>
        <Form.Input label='First Name' placeholder='First Name' type='text'
           name="firstName" onChange={this.handleInputChange.bind(this)}
           value={this.state.name}/>
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
            label='Student' value='Student'
            checked={this.state.type === "Student"}
            onChange={this.handleInputChange.bind(this)}  />

          <Form.Radio
            name="type"
            label='Faculty'
            value='Faculty'
             checked={this.state.type === "Faculty"}
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
// <Ref innerRef={ node => this.radio=node}>
// <Form.Field  key={this.checked}
//   control={Radio} label='One' value="one"
//   checked={this.checked == 'one'} onChange={this.handleChange}>
// </Form.Field>
// </Ref>
// <Ref innerRef={ node => this.radio2=node}>
// <Form.Field key={this.checked}
//  control={Radio} label='two' value="two"
//  checked={this.checked == 'two'} onChange={this.handleChange}>
// </Form.Field>
// </Ref>


//   <Form.Field >
  //   <Input ref="s" type='radio' value="mail"/>
  // </Form.Field>

// <Form.Radio label='Faculty' value='Faculty'
 //   checked={this.type == "Faculty"}
 // onChange={(e, { value }) => this.type=value} />




 // <Form.Field control={Radio} label='One' value='asdc1' name="contact" />
 //     <Form.Field >
 //   <label >Phone</label>
 // <Input type="radio"
 //   name="contact" value="phone"></Input>
 // </Form.Field>
 //   <Form.Field >
 //       <label >Mail</label>
 //     <input type="radio"
 //       name="contact" value="mail"></input>
 //   </Form.Field>
