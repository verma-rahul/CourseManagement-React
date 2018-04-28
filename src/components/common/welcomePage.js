import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
import {
  Button, Checkbox, Form, Menu, Segment, Input, Advertisement, Dropdown, Image,
  Container, Header, Embed, Grid, Message, Table, Icon, Modal, Accordion } from 'semantic-ui-react'
import { connect } from 'react-redux';

class WelcomePage extends Component {

  render() {
    const userExists=!(Object.keys(this.props.user).length === 0)
    return (

          <Grid padded  >
   <Grid.Row centered>
   <Segment padded='very' raised >
   <Header as='h1'>Welcome to Course Manager </Header>
   { !userExists && <Button.Group>
    <Button positive size='massive' as={Link} to='/register'>Sign Up</Button>
    <Button.Or size='massive'/>
    <Button primary size='massive' as={Link} to='/login'>Login</Button>
   </Button.Group> }
   { userExists && <Button.Group>
    <Button positive size='massive' as={Link} to='/CourseList'>Courses</Button>
    <Button.Or size='massive'/>
    <Button primary size='massive' as={Link} to='/profile'>Profile</Button>
   </Button.Group> }
    </ Segment>
  </Grid.Row>
       </Grid>

    );
  }
}

const mapStateToProps = (state) => ({
    user:state.app.user
});

export default connect(mapStateToProps, {})(WelcomePage);
