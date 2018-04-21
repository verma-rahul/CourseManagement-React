import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {
    Button, Checkbox, Form, Menu, Segment, Input, Advertisement, Dropdown, Image,
    Container, Header, Embed, Grid, Message, Table, Icon, Modal, Accordion
} from 'semantic-ui-react'
class Profile extends Component {
  constructor(props) {
      super(props);
      this.state = {
          firstname: '',
          lastname: '',
          username: '',
          password: ''
      }
  }

  render() {
      return (
        <Grid padded  >
         <Grid.Row centered>
            <Segment padded='very' raised >
        <Form size='large'>
          <Form.Group widths='equal'>
      <Form.Input  label='First Name' placeholder='First Name' type='text' />
      <Form.Input  label='Last Name' placeholder='Last Name' type='text' />
       </Form.Group>
         <Form.Group widths='equal'>
    <Form.Input  label='Username' placeholder='Username' type='text' />
    <Form.Input  label='Password' type='password' placeholder='password'/>
    </Form.Group>
    <Form.Group widths='equal'>
<Form.Input  label='Email' placeholder='AA@gmail.com' type='email' />
<Form.Input  label='Phone Number' type='Phone' placeholder='(XXX)-XXX-XXXX' />
</Form.Group>
    <Button positive fluid>Update</Button>
  </Form>
</Segment>
</Grid.Row>
</Grid>

      )
  }
}

export default Profile;
