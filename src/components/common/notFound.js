import React, { Component } from 'react';
import axios from "axios";
import {
  Button, Checkbox, Form, Menu, Segment, Input, Advertisement, Dropdown, Image,
  Container, Header, Embed, Grid, Message, Table, Icon, Modal, Accordion } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NotFound extends Component {

  render() {
    return (  <Grid padded  >
         <Grid.Row centered>
         <Segment padded='very' raised >
         <Header as='h1'>Page not Found Or Not Login</Header>
         <Button.Group>
          <Button primary size='massive' as={Link} to='/'> Go to Home</Button>
         </Button.Group>
          </ Segment>
        </Grid.Row>
             </Grid>);
  }
}

export default NotFound;
