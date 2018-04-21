import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
import {
  Button, Checkbox, Form, Menu, Segment, Input, Advertisement, Dropdown, Image,
  Container, Header, Embed, Grid, Message, Table, Icon, Modal, Accordion } from 'semantic-ui-react'


class WelcomePage extends Component {
  componentDidMount() {
  this.connectServer()
  }
  connectServer()
  {
    axios.get('/api/demo/')
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (

          <Grid padded  >
   <Grid.Row centered>
   <Segment padded='very' raised >
   <Header as='h1'>Welcome to Course Manager </Header>
   <Button.Group>
    <Button positive size='massive' as={Link} to='/register'>Sign Up</Button>
    <Button.Or size='massive'/>
    <Button primary size='massive' as={Link} to='/login'>Login</Button>
   </Button.Group>
    </ Segment>
  </Grid.Row>
       </Grid>

    );
  }
}

export default WelcomePage;
